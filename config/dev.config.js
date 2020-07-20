const config = {
    base_url: "http://localhost:8000/api/v1",
    port: process.env.PORT || 8000,
    database_url:
      process.env.MONGO || "mongodb://localhost/landis",
  };
  
  module.exports = config;
  