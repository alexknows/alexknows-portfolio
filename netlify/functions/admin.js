const { Buffer } = require("buffer");

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, x-admin-password",
    "Access-Control-Allow-Methods": "POST, PUT, OPTIONS",
  },
  body: JSON.stringify(body),
});

const headerPassword = (headers = {}) =>
  headers["x-admin-password"] || headers["X-Admin-Password"] || "";

const savePostsToGitHub = async (posts) => {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || "alexknows/alexknows-portfolio";
  if (!token) {
    const error = new Error(
      "Set GITHUB_TOKEN in Netlify env vars to save notes on the live site."
    );
    error.statusCode = 501;
    throw error;
  }
  const filePath = "public/content/posts.json";
  const api = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "alexknows-admin",
  };
  const existingRes = await fetch(api, { headers });
  const existing = existingRes.ok ? await existingRes.json() : {};
  const putRes = await fetch(api, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Update notes from admin",
      content: Buffer.from(JSON.stringify(posts, null, 2)).toString("base64"),
      sha: existing.sha,
      branch: "main",
    }),
  });
  if (!putRes.ok) {
    const text = await putRes.text();
    const error = new Error(text || "GitHub save failed");
    error.statusCode = 502;
    throw error;
  }
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }
  const password = process.env.ADMIN_PASSWORD;
  const path = event.path || "";
  let body = {};
  if (event.body) {
    try {
      body = JSON.parse(event.body);
    } catch (err) {
      return json(400, { error: "Invalid JSON" });
    }
  }

  if (path.indexOf("login") !== -1 && event.httpMethod === "POST") {
    if (!password) {
      return json(500, { error: "ADMIN_PASSWORD is not set." });
    }
    if (body.password !== password) {
      return json(401, { error: "Wrong password" });
    }
    return json(200, { ok: true });
  }

  if (path.indexOf("posts") !== -1 && event.httpMethod === "PUT") {
    if (!password || headerPassword(event.headers) !== password) {
      return json(401, { error: "Unauthorized" });
    }
    if (!Array.isArray(body.posts)) {
      return json(400, { error: "posts array is required" });
    }
    try {
      await savePostsToGitHub(body.posts);
      return json(200, { ok: true });
    } catch (err) {
      return json(err.statusCode || 500, { error: err.message || "Save failed" });
    }
  }

  return json(404, { error: "Not found" });
};
