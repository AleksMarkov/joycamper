import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getAllCampers = async () => {
  const { data } = await apiInstance.get('/campers');
  return data;
};
