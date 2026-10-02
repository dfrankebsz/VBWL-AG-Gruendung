import {
  stores, json, bodyJson, requireSession, publicUser, hashPassword,
  userIndexKey, cleanText, defaultProgress
} from "./_lib.mjs";

async function usersInClass(classNorm) {
  const userStore = stores.users();
  const { blobs } = await userStore.list({ prefix: "user/" });
  const out = [];
  for (const item of blobs) {
    const u = await userStore.get(item.key, { type: "json" });
    if (u && u.classNorm === classNorm) out.push(u);
  }
  return out;
}

export default async (req) => {
  const auth = await requireSession(req, ["teacher"]);
  if (auth.error) return auth.error;
  const url = new URL(req.url);
  const action = url.searchParams.get("action") || "class";
  const userStore = stores.users();
  const progressStore = stores.progress();
  const sessionStore = stores.sessions();

  if (action === "class" && req.method === "GET") {
    const users = await usersInClass(auth.user.classNorm);
    const rows = [];
    for (const u of users) {
      const p = await progressStore.get(`progress/${u.id}`, { type: "json" }) || defaultProgress();
      rows.push({
        user: publicUser(u),
        progress: {
          xp: Number(p.xp) || 0,
          completedCount: Object.keys(p.completed || {}).length,
          updatedAt: p.updatedAt || null,
          selectedAvatar: p.selectedAvatar || "starter"
        }
      });
    }
    rows.sort((a,b) => (b.progress.xp || 0) - (a.progress.xp || 0));
    return json({ className: auth.user.className, users: rows });
  }

  if (req.method !== "POST") return json({ error: "Methode nicht erlaubt." }, 405);
  const b = await bodyJson(req);

  if (action === "resetClassProgress") {
    const users = await usersInClass(auth.user.classNorm);
    for (const u of users) {
      if (u.role === "student") await progressStore.set(`progress/${u.id}`, JSON.stringify(defaultProgress()));
    }
    return json({ ok: true, count: users.filter(u => u.role === "student").length });
  }

  const targetId = cleanText(b.userId, 80);
  const target = await userStore.get(`user/${targetId}`, { type: "json" });
  if (!target || target.classNorm !== auth.user.classNorm || target.role !== "student") return json({ error: "Schülerkonto nicht gefunden oder nicht in Ihrer Klasse." }, 404);

  if (action === "resetProgress") {
    await progressStore.set(`progress/${target.id}`, JSON.stringify(defaultProgress()));
    return json({ ok: true });
  }

  if (action === "resetPassword") {
    const newPassword = String(b.newPassword || "");
    if (newPassword.length < 6) return json({ error: "Neues Passwort muss mindestens 6 Zeichen haben." }, 400);
    const pw = hashPassword(newPassword);
    target.passwordSalt = pw.salt;
    target.passwordHash = pw.hash;
    target.passwordResetAt = Date.now();
    await userStore.set(`user/${target.id}`, JSON.stringify(target));
    const { blobs } = await sessionStore.list({ prefix: "session/" });
    for (const item of blobs) {
      const sess = await sessionStore.get(item.key, { type: "json" });
      if (sess?.userId === target.id) await sessionStore.delete(item.key);
    }
    return json({ ok: true });
  }

  if (action === "deleteUser") {
    await userStore.delete(`user/${target.id}`);
    await userStore.delete(userIndexKey(target.className, target.nickname));
    await progressStore.delete(`progress/${target.id}`);
    const { blobs } = await sessionStore.list({ prefix: "session/" });
    for (const item of blobs) {
      const sess = await sessionStore.get(item.key, { type: "json" });
      if (sess?.userId === target.id) await sessionStore.delete(item.key);
    }
    return json({ ok: true });
  }

  return json({ error: "Unbekannte Aktion." }, 404);
};
