const { Pegawai } = require("../../models");
const bcrypt = require("bcrypt");
const {
  validateUserRegisterPayload,
  validateUserLoginPayload,
} = require("../../validator/pegawai");
const { generateAccessToken } = require("../../utils/TokenManager.js");

module.exports = {
  handlerLoginUser: async (req, res, next) => {
    try {
      const {email, password } = req.body;
      validateUserLoginPayload(req.body);
      const user = await Pegawai.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      const passwordValid = bcrypt.compareSync(password, user.password);
      if (!passwordValid) {
        throw new Error("Invalid password");
      }
      const accessToken = generateAccessToken({
        id: user.id,
        email: user.email,
        nama_lengkap: user.nama_lengkap,
        alamat: user.alamat,
        no_hp: user.no_hp,
      });
      res.status(200).json({
        status: "success",
        message: "Successfully login user",
        data: {
          user,
          accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  handlerRegisterUser: async (req, res, next) => {
    try {
      const {
        email,
        password,
        nama_lengkap,
        alamat,
        no_hp,
      } = req.body;
      validateUserRegisterPayload(req.body);
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await Pegawai.create({
        email,
        password: hashPassword,
        nama_lengkap,
        alamat,
        no_hp,
      });
      const data = await Pegawai.findAll({
        where: { id: user.id },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });

      res.status(200).json({
        status: "success",
        message: "Successfully create user",
        data: data,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error",
      });
    }
  },
};