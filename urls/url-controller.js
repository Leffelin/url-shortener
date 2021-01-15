const urlService = require("./url-service");

const saveUrl = (url) => {
  const shortUrl = urlService.saveUrl(url);
  return { url, shortUrl: `/${shortUrl}` };
};

const getUrl = (id) => {
  const url = urlService.getUrlById(id);
  return url;
};

module.exports = {
  getUrl,
  saveUrl,
};
