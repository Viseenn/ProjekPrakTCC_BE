const { Barang } = require("../../models");

module.exports = {
  handlerGetAllData: async (req, res, next) => {
    try {
      const barang = await Barang.findAll();
      res.status(200).json({
        status: "success",
        message: "Successfully get all data",
        data: barang,
      });
    } catch (error) {
      next(error);
    }
  },
  handlerGetDataKode: async (req, res, next) => {
    try {
      const { kode } = req.params;
      const data = await Barang.findAll({
        where: { kode: kode },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!data) {
        res.status(404).json({
          message: "Data not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Successfully get data by kode",
          data: data,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  handlerPostData: async (req, res, next) => {
    try {
      const {
        id_pegawai,
        kode,
        barang,
        jumlah,
        satuan,
        tanggal,
        kategori,
        kondisi,
        harga,
      } = req.body;
      const data = await Barang.create({
        id_pegawai,
        kode,
        barang,
        jumlah,
        satuan,
        tanggal,
        kategori,
        kondisi,
        harga,
      });
      res.status(200).json({
        status: "success",
        message: "Successfully create data",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
  handlerDeleteData: async (req, res) => {
    const { id } = req.params;
    const data = await Barang.findByPk(id);
    if (!data) {
      res.status(404).json({
        message: "Data not found",
      });
    } else {
      await data.destroy();
      res.status(200).json({
        status: "success",
        message: "Successfully delete data",
      });
    }
  },
  handlerUpdateData: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await Barang.findByPk(id);
      const { barang, jumlah, satuan, tanggal, kategori, kondisi, harga } =
        req.body;

      if (!data) {
        res.status(404).json({
          message: "Data not found",
        });
      } else {
        await data.update({
          barang,
          jumlah,
          satuan,
          tanggal,
          kategori,
          kondisi,
          harga,
        });
        const dataBarang = await Barang.findAll({
          where: { id: data.id },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        res.status(200).json({
          status: "success",
          message: "Successfully update data",
          data: dataBarang,
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
