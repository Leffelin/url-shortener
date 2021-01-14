const express = require("express");
const router = express.Router();
const urlController = require("./url-controller");

router.post("/", function (req, res) {
  const data = req.body;
  if (!data) {
    res.status(422).send("Need an url in order to create a shortUrl");
    return;
  }

  const id = urlController.saveUrl(data.url);

  res.status(201).json({ url: data.url, short: `/${id}` });
});

router.get("/:id", function (req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(404).send();
    return;
  }

  const url = urlController.getUrl(id);

  if (!url) {
    res.status(404).send(`Not found - ${id}`);
    return;
  }

  res.set("Location", url);
  res.status(301).send();
});

module.exports = router;
