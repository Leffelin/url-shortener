const urlEntityFactory = require("./url-entity-factory");
const urlsRepository = require("./url-repository");
const urlHasher = require("./url-hasher");

const saveUrl = (url) => {
  const hash = urlHasher.createHash(url);
  const urlEntity = urlEntityFactory.create(url, hash);

  savedUrlEntity = urlsRepository.save(urlEntity);

  return savedUrlEntity.id;
};

const getUrlById = (id) => {
  const urlEntity = urlsRepository.get(id);

  if (!urlEntity) {
    return null;
  }

  return urlEntity.url;
};

module.exports = {
  saveUrl,
  getUrlById,
};
