const express = require("express");
const router = express.Router();
const { body, param, validationResult } = require("express-validator");
const urlController = require("./url-controller");

const validateViewModel = (method) => {
  switch (method) {
    case "saveUrl": {
      return [body("url", "The url to shorten, was not supplied.").exists()];
    }
    case "getUrl": {
      return [
        param(
          "id",
          "The short url to look up, was not supplied in the right format (Number)."
        )
          .exists()
          .isInt(),
      ];
    }
  }
};

router.post("/", validateViewModel("saveUrl"), (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { url } = req.body;
    const urlResponse = urlController.saveUrl(url);

    res.json(urlResponse);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", validateViewModel("getUrl"), (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { id } = req.params;
    const url = urlController.getUrl(id);

    if (!url) {
      res.status(404).send("Not found");
      return;
    }

    res.set("Location", url);
    res.status(301).send();
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
