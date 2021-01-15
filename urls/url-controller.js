const { body, param, validationResult } = require("express-validator");
const urlService = require("./url-service");

const validate = (method) => {
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

const saveUrl = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { url } = req.body;
    const urlResponse = urlService.saveUrl(url);

    res.json(urlResponse);
  } catch (err) {
    return next(err);
  }
};

const getUrl = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { id } = req.params;
    const url = urlService.getUrlById(id);

    res.set("Location", url);
    res.status(301).send();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getUrl,
  saveUrl,
  validate,
};
