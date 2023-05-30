const jwt = require("jsonwebtoken");

const accessTokenSecretKey = "projek-akhir-praktcc";

function generateAccessToken(userPayload) {
  return jwt.sign(userPayload, accessTokenSecretKey, {
    subject: userPayload.nama_lengkap,
    expiresIn: "20m",
  });
}

module.exports = {
  generateAccessToken,
};