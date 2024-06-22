import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_API_URL;
export async function login({ email, password }) {
  try {
    const response = await axios.post(`${BACKEND_URL}user/login`, {
      email,
      password,
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.error('User cannot be Log In!', error);
    throw error;
  }
}

