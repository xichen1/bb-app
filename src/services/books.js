import axios from 'axios';
const baseUrl = '/api/books';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    return response.data;
  });
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => {
    return response.data;
  });
}

const update = (id, newObject) => {
  const requset = axios.put(`${baseUrl}/${id}`, newObject)
  return requset.then(response => {
    return response.data;
  });
}

export const bookServices = {
  getAll: getAll,
  create: create,
  update: update
}