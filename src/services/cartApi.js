import api from './api';

export async function postCart(body, token) {
  const response = await api.post('/cart', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getCart(token) {
  const response = await api.get('/cart', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//