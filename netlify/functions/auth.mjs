import crypto from "node:crypto";
import {
  stores, json, bodyJson, cleanText, normalize, userIndexKey,
  hashPassword, verifyPassword, publicUser, createSession, requireSession, defaultProgress
} from "./_lib.mjs";

export default async (req) => {
  const url = new URL(req.url);
  const action = url.searchParams.get("action") || "me";

  if (action === "register" && req.method === "POST") {
    const b = await bodyJson(req);
    const nickname = cleanText(b.nickname, 32);
    const className = cleanText(b.className, 32);
    const password = String(b.password || "");
    const role = b.role === "teacher" ? "teacher" : "student";
    if (nickname.length < 2 || className.length < 1 || password.length < 6) {
      return json({ error: "Nickname (mind. 2 Zeichen), Klasse und Passwort (mind. 6 Zeichen) sind erforderlich." }, 400);
    }
    if (role === "teacher") {
      const configured = process.env.TEACHER_CODE;
      if (!configured) return json({ error: "TEACHER_CODE ist in Netlify noch nicht gesetzt." }, 503);
      if (String(b.teacherCode || "") !== configured) return json({ error: "Lehrercode ist nicht korrekt." }, 403);
    }
    const users = stores.users();
    const indexKey = userIndexKey(className, nickname);
    const existingId = await users.get(indexKey, { type: "text" });
    if (existingId) return json({ error: "Dieser Nickname ist in der Klasse bereits vergeben." }, 409);

    const id = crypto.randomUUID();
    const pw = hashPassword(password);
    const user = {
      id, nickname, nicknameNorm: normalize(nickname), className, classNorm: normalize(className), role,
      passwordSalt: pw.salt, passwordHash: pw.hash, createdAt: Date.now()
    };
    await users.set(`user/${id}`, JSON.stringify(user));
    await users.set(indexKey, id);
    await stores.progress().set(`progress/${id}`, JSON.stringify(defaultProgress()));
    const session = await createSession(id);
    return json({ user: publicUser(user), ...session });
  }

  if (action === "login" && req.method === "POST") {
    const b = await bodyJson(req);
    const nickname = cleanText(b.nickname, 32);
    const className = cleanText(b.className, 32);
    const password = String(b.password || "");
    const users = stores.users();
    const id = await users.get(userIndexKey(className, nickname), { type: "text" });
    if (!id) return json({ error: "Anmeldedaten nicht korrekt." }, 401);
    const user = await users.get(`user/${id}`, { type: "json" });
    if (!user || !verifyPassword(password, user.passwordSalt, user.passwordHash)) return json({ error: "Anmeldedaten nicht korrekt." }, 401);
    const session = await createSession(id);
    return json({ user: publicUser(user), ...session });
  }

  if (action === "logout" && req.method === "POST") {
    const auth = await requireSession(req);
    if (auth.error) return auth.error;
    await stores.sessions().delete(auth.key);
    return json({ ok: true });
  }

  if (action === "me") {
    const auth = await requireSession(req);
    if (auth.error) return auth.error;
    return json({ user: publicUser(auth.user), expiresAt: auth.session.expiresAt });
  }

  return json({ error: "Unbekannte Aktion." }, 404);
};
