const express = require("express");
const {
  handlerGetAllData,
  handlerPostData,
  handlerDeleteData,
  handlerUpdateData,
  handlerGetDataKode,
} = require("./handler");
const router = express.Router();

//API1 Get Data
router.get("/", handlerGetAllData);

//API2 Create Data
router.post("/", handlerPostData);

//API5 Delete Users
router.delete("/:id", handlerDeleteData);

//API4 Update Users
router.put("/:id", handlerUpdateData);

//API2 Get Users By Id
router.get("/:kode", handlerGetDataKode);

module.exports = router;
