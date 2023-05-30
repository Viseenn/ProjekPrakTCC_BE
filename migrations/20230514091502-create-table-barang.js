"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("barang", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      id_pegawai:{
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
      kode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      barang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      satuan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      kategori: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kondisi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      harga:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("barang");
  },
};
