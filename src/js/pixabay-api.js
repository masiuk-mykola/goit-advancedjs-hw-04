import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export function getImagesByQuery(query) {
  const params = new URLSearchParams({
    q: query,
    key: VITE_API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios.get(API_URL, { params }).then(response => response.data);
}
