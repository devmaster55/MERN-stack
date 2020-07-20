import axios from "axios";

// const { base_url } = require("../config");

const env = process.env.NODE_ENV;

console.log(`Starting application with ${env ? env : 'dev'} configuration...`.bgBlue);

if (env === 'production') {
  var base_url = "https://landis.com/api/v1";
} else {
  var base_url = "http://localhost:8000/api/v1";
}

export default axios.create({
  baseURL: base_url,
  headers: {
    "Content-type": "application/json"
  }
});