import api from './api';

export async function signIn(body) {
  const response = await api.post('/sign-in', body);
  return response.data;
}

export async function signUp(body) {
  const response = await api.post('/sign-up', body);
  return response.data;
}

export async function signOut(token) {
  const response = await api.put('/sign-out', {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
