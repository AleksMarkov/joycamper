import axios from 'axios';

const advertsInstance = axios.create({
  baseURL: 'https://665b72a0003609eda460e874.mockapi.io/api',
});

export const getAllAdverts = async () => {
  const { data } = await advertsInstance.get('/adverts');
  return data;
};
