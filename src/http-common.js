import axios from "axios";

const { base_url } = require("../config");

export default axios.create({
  baseURL: base_url,
  headers: {
    "Content-type": "application/json"
  }
});