import { stores, json, bodyJson, requireSession, defaultProgress, sanitizeProgress } from "./_lib.mjs";

export default async (req) => {
  const auth = await requireSession(req, ["student", "teacher"]);
  if (auth.error) return auth.error;
  const store = stores.progress();
  const key = `progress/${auth.user.id}`;

  if (req.method === "GET") {
    const p = await store.get(key, { type: "json" });
    return json({ progress: p || defaultProgress() });
  }

  if (req.method === "POST") {
    const b = await bodyJson(req);
    const p = sanitizeProgress(b.progress || b);
    await store.set(key, JSON.stringify(p));
    return json({ ok: true, progress: p });
  }

  return json({ error: "Methode nicht erlaubt." }, 405);
};
