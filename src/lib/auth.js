const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { cookies } = require("next/headers");

async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

async function verifyPassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

async function getAuthUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) return null;

  return verifyToken(token);
}

function setAuthCookie(token) {
  const cookieStore = cookies();
  cookieStore.set("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });
}

function clearAuthCookie() {
  const cookieStore = cookies();
  cookieStore.delete("auth-token");
}

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  getAuthUser,
  setAuthCookie,
  clearAuthCookie,
};
