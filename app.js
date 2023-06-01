const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const barangRouter = require("./app/barang/route");
const pegawaiRouter = require("./app/pegawai/route");
const userRouterA = require("./app/authentication/route");
const Handler404NotFound = require("./middleware/Handler404NotFound");
const CustomErrorHandler = require("./middleware/CustomErrorHandler");
var cors = require('cors');

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/barang", barangRouter);
app.use("/pegawai", pegawaiRouter);
app.use("/auth", userRouterA);

app.use(Handler404NotFound);
app.use(CustomErrorHandler);

module.exports = app;
