const { Pegawai } = require("../../models");
const bcrypt = require("bcrypt");
const {
  validateUserCreatePayload,
  validateUserUpdatePayload,
} = require("../../validator/pegawai");

module.exports = {
  handlerGetAllPegawai: async (req, res) => {
    const pegawai = await Pegawai.findAll();
    res.status(200).json(pegawai);
  },
  handlerPostPegawai: async (req, res) => {
    console.log(req.user);
    try {
      const { id, email, password, nama_lengkap, alamat, no_hp } = req.body;
      validateUserCreatePayload({
        id, email, password, nama_lengkap, alamat, no_hp
      });
      const hashPassword = await bcrypt.hash(password, 10);
      const pegawai = await Pegawai.create({
        id,
        email,
        password: hashPassword,
        nama_lengkap,
        alamat,
        no_hp,
      });
      res.status(200).json(pegawai);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  handlerDeletePegawai: async (req, res) => {
    const { id } = req.params;
    const pegawai = await Pegawai.findByPk(id);
    if (!pegawai) {
      res.status(404).json({
        message: "Pegawai not found!",
      });
    } else {
      await pegawai.destroy();
      res.status(200).json({
        message: "Pegawai deleted",
      });
    }
  },
  handlerPutPegawai: async (req, res) => {
    try {
      const { id } = req.params;
      const { email, nama_lengkap, alamat, no_hp } = req.body;

      const pegawai = await Pegawai.findByPk(id);
      if (!pegawai) {
        res.status(404).json({
          message: "User not found!",
        });
      } else {
        await pegawai.update({
          email,
          nama_lengkap,
          alamat,
          no_hp,
        });
        res.status(200).json(pegawai);
      }
    } catch {
      res.status(400).json(error.message);
    }
  },
};
