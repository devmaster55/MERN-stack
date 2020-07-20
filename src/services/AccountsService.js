import http from "../http-common";

const getAll = () => {
  return http.get("/accounts");
};

const get = id => {
  return http.get(`/accounts/${id}`);
};

const create = data => {
  return http.post("/accounts", data);
};

const update = (id, data) => {
  return http.put(`/accounts/${id}`, data);
};

const remove = id => {
  return http.delete(`/accounts/${id}`);
};

const removeAll = () => {
  return http.delete(`/accounts`);
};

const findByName = name => {
  return http.get(`/accounts?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};