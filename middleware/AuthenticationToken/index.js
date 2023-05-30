const jwt = require("jsonwebtoken");
const accessTokenSecretKey = "projek-akhir-praktcc";

function AuthenticationToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    next(new Error("Token not found"));
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    next(new Error("Token is required"));
  }
  const decoded = jwt.verify(token, accessTokenSecretKey);

  const user = {
    id: decoded.id,
    email: decoded.email,
    nama_lengkap: decoded.nama_lengkap,
    alamat: decoded.alamat,
    no_hp: decoded.no_hp,
  };

  req.user = user;

  next();
}

module.exports = AuthenticationToken;