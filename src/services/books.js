import axios from 'axios';
const baseUrl = '/api/books';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    return response.data;
  });
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject);

  const data = response.data;

  await axios.post('/api/bookdetails', {
    title: data.title,
    author: data.author,
    about: data.about,
    book: data.id
  })

  return data;
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