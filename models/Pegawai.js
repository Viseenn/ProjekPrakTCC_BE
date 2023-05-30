function createModelPegawai(Sequelize, DataTypes) {
    const Pegawai = Sequelize.define(
      "Pegawai",
      {
        id : {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        email : {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nama_lengkap : {
          type: DataTypes.STRING,
          allowNull: false,
        },
        alamat : {
          type: DataTypes.STRING,
          allowNull: false,
        },
        no_hp : {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: "pegawai",
      }
    );
    return Pegawai;
  }
  
  module.exports = createModelPegawai;