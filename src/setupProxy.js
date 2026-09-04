const fs = require("fs");
const path = require("path");
const express = require("express");

const POSTS_PATH = path.join(__dirname, "..", "public", "content", "posts.json");
const ENV_LOCAL = path.join(__dirname, "..", ".env.local");

const loadAdminPassword = () => {
  if (process.env.ADMIN_PASSWORD) {
    return process.env.ADMIN_PASSWORD;
  }
  if (!fs.existsSync(ENV_LOCAL)) {
    return "";
  }
  const lines = fs.readFileSync(ENV_LOCAL, "utf8").split("\n");
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^ADMIN_PASSWORD=(.*)$/);
    if (match) {
      return match[1].trim().replace(/^["']|["']$/g, "");
    }
  }
  return "";
};

const unauthorized = (res) =>
  res.status(401).json({ error: "Unauthorized" });

module.exports = function (app) {
  app.use(express.json({ limit: "8mb" }));

  app.post("/api/admin/login", (req, res) => {
    const password = loadAdminPassword();
    if (!password) {
      return res.status(500).json({
        error: "Set ADMIN_PASSWORD in .env.local, then restart the dev server.",
      });
    }
    if (!req.body || req.body.password !== password) {
      return unauthorized(res);
    }
    return res.json({ ok: true });
  });

  app.put("/api/admin/posts", (req, res) => {
    const password = loadAdminPassword();
    if (!password || req.headers["x-admin-password"] !== password) {
      return unauthorized(res);
    }
    if (!req.body || !Array.isArray(req.body.posts)) {
      return res.status(400).json({ error: "posts array is required" });
    }
    fs.mkdirSync(path.dirname(POSTS_PATH), { recursive: true });
    fs.writeFileSync(POSTS_PATH, JSON.stringify(req.body.posts, null, 2));
    return res.json({ ok: true });
  });
};
