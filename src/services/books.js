import axios from 'axios';
const baseUrl = '/api/books';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject);
  const data = response.data;
  return data;
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
}

export const bookServices = {
  getAll: getAll,
  create: create,
  update: update
}