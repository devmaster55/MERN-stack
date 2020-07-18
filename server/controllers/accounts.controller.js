const checking = async (req, res, next) => {
  res.json({
      "Tutorial": "Welcome to the Landis panel."
  });
};

module.exports = {
  checking
};