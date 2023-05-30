const express = require("express");
const {
  handlerGetAllPegawai,
  handlerPostPegawai,
  handlerDeletePegawai,
  handlerPutPegawai
} = require("./handler");
const AuthenticationToken = require("../../middleware/AuthenticationToken");
const router = express.Router();

//API1 Get Data
router.get('/', handlerGetAllPegawai);

//API2 Create Data
router.post('/', AuthenticationToken, handlerPostPegawai);

//API5 Delete Users
router.delete('/:id', handlerDeletePegawai);

//API4 Update Users
router.put('/:id', handlerPutPegawai);


module.exports = router;
