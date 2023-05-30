function createModelBarang(Sequelize, DataTypes) {
    const Barang = Sequelize.define(
      "Barang",
      {
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        id_pegawai:{
          type: DataTypes.INTEGER,
          foreignKey: true,
          allowNull: false,
        },
        kode: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        barang: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        jumlah: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        satuan: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        tanggal: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        kategori: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        kondisi: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        harga:{
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
        tableName: "barang",
      }
    );
    return Barang;
  }
  
  module.exports = createModelBarang;




  