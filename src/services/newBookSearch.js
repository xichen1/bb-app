import axios from 'axios';

const search = async (query) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_GOOGLE_BOOK}&maxResults=20`);
  return response.data;
}

export const newBookSearch = { search };