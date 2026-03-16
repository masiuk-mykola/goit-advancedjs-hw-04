import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    q: query,
    key: VITE_API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };

  const response = await axios.get(API_URL, { params });
  return response.data;
}
