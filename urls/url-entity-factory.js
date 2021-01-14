const create = (url, id) => {
  const entity = {
    url,
    id,
    createdAt: null,
  };

  return entity;
};

module.exports = {
  create,
};
