import axios from 'axios';

const API_KEY = '53252771-146265e1bedbafdc9d92a47ef';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
