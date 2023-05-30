'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('pegawai', { 
    id : {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email : {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nama_lengkap : {
      type: Sequelize.STRING,
      allowNull: false,
    },
    alamat : {
      type: Sequelize.STRING,
      allowNull: false,
    },
    no_hp : {
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pegawai');
  }
};

