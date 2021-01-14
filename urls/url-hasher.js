let id = 1;

const createHash = (url) => {
  return id++;
};

module.exports = {
  createHash,
};
