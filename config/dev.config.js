const config = {
    port: process.env.PORT || 8000,
    database_url:
      process.env.MONGO || "mongodb://localhost/landis",
  };
  
  module.exports = config;
  