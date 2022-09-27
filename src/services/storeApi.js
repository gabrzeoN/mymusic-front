import api from './api';

export async function getStore(token) {
  const response = await api.get('/store', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}