const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_SECRET || "JWT-key";
const expiresIn = process.env.JWT_EXPIRES_IN || "24h";

const generateToken = (userId) => {
  return jwt.sign({ userId }, secret, { expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, verifyToken };
