//adverts.js
import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const getAllCampers = async () => {
  const { data } = await apiInstance.get('/campers');
  return data;
};
