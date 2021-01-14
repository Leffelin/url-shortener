const shortToFull = {};

const save = (urlEntity) => {
  const entityToSave = { ...urlEntity, createdAt: new Date() };
  shortToFull[entityToSave.id] = entityToSave;

  return entityToSave;
};

const get = (id) => {
  return shortToFull[id];
};

module.exports = {
  save,
  get,
};
