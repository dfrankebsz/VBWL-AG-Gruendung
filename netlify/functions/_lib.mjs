import { getStore } from "@netlify/blobs";
import crypto from "node:crypto";

export const stores = {
  users: () => getStore("ag-course-users"),
  sessions: () => getStore("ag-course-sessions"),
  progress: () => getStore("ag-course-progress")
};

export function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...extraHeaders
    }
  });
}

export async function bodyJson(req) {
  try { return await req.json(); } catch { return {}; }
}

export function cleanText(value, max = 80) {
  return String(value ?? "").trim().replace(/\s+/g, " ").slice(0, max);
}

export function normalize(value) {
  return cleanText(value, 80).toLocaleLowerCase("de-DE");
}

export function sha(value) {
  return crypto.createHash("sha256").update(String(value)).digest("hex");
}

export function userIndexKey(className, nickname) {
  return `index/${sha(`${normalize(className)}|${normalize(nickname)}`)}`;
}

export function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.scryptSync(String(password), salt, 64).toString("hex");
  return { salt, hash };
}

export function verifyPassword(password, salt, expected) {
  try {
    const actual = crypto.scryptSync(String(password), salt, 64);
    const wanted = Buffer.from(expected, "hex");
    return wanted.length === actual.length && crypto.timingSafeEqual(actual, wanted);
  } catch { return false; }
}

export function publicUser(user) {
  return {
    id: user.id,
    nickname: user.nickname,
    className: user.className,
    role: user.role,
    createdAt: user.createdAt
  };
}

export async function getUserById(id) {
  if (!id) return null;
  return await stores.users().get(`user/${id}`, { type: "json" });
}

export async function requireSession(req, roles = []) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return { error: json({ error: "Nicht angemeldet." }, 401) };
  const key = `session/${sha(token)}`;
  const session = await stores.sessions().get(key, { type: "json" });
  if (!session || Date.now() > session.expiresAt) {
    if (session) await stores.sessions().delete(key).catch(() => {});
    return { error: json({ error: "Sitzung abgelaufen." }, 401) };
  }
  const user = await getUserById(session.userId);
  if (!user) return { error: json({ error: "Nutzerkonto nicht gefunden." }, 401) };
  if (roles.length && !roles.includes(user.role)) return { error: json({ error: "Keine Berechtigung." }, 403) };
  return { token, key, session, user };
}

export async function createSession(userId) {
  const token = crypto.randomBytes(32).toString("base64url");
  const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 30;
  await stores.sessions().set(`session/${sha(token)}`, JSON.stringify({ userId, expiresAt, createdAt: Date.now() }));
  return { token, expiresAt };
}

export function defaultProgress() {
  return {
    completed: {},
    attempts: {},
    xp: 0,
    selectedTheme: "mint",
    selectedAvatar: "starter",
    selectedOutfit: "none",
    unlocked: [],
    achievements: [],
    updatedAt: Date.now()
  };
}

export function sanitizeProgress(input = {}) {
  const p = defaultProgress();
  if (input.completed && typeof input.completed === "object") p.completed = input.completed;
  if (input.attempts && typeof input.attempts === "object") p.attempts = input.attempts;
  p.xp = Math.max(0, Math.min(100000, Number(input.xp) || 0));
  p.selectedTheme = cleanText(input.selectedTheme || "mint", 30);
  p.selectedAvatar = cleanText(input.selectedAvatar || "starter", 30);
  p.selectedOutfit = cleanText(input.selectedOutfit || "none", 30);
  p.unlocked = Array.isArray(input.unlocked) ? input.unlocked.map(x => cleanText(x, 40)).slice(0, 100) : [];
  p.achievements = Array.isArray(input.achievements) ? input.achievements.map(x => cleanText(x, 60)).slice(0, 100) : [];
  p.updatedAt = Date.now();
  return p;
}
