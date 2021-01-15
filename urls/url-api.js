const express = require("express");
const router = express.Router();
const urlController = require("./url-controller");

router.post("/", urlController.validate("saveUrl"), urlController.saveUrl);

router.get("/:id", urlController.validate("getUrl"), urlController.getUrl);

module.exports = router;
