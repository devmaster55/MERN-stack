const config = {
    port: process.env.PORT || 8000,
    database:
      process.env.MONGO || "mongodb://localhost/landis",
  };
  
  module.exports = config;
  