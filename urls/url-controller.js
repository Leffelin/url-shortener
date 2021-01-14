const urlService = require("./url-service");

const saveUrl = (url) => urlService.saveUrl(url);

const getUrl = (id) => urlService.getUrlById(id);

module.exports = {
  getUrl,
  saveUrl,
};
