import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_API_URL;

export async function register({ firstName, lastName, email, password }) {
  try {
    const response = await axios.post(
      `${BACKEND_URL}user/register`,
      {
        email,
        password,
        firstName,
        lastName,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error('User cannot be Register. Try Again!', error);
    throw error;
  }
}

export async function login({ email, password }) {
  try {
    const response = await axios.post(
      `${BACKEND_URL}user/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('User cannot be Log In!', error);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const response = await axios.get(`${BACKEND_URL}user/me`, {
      withCredentials: true,
    });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('User cannot found', error);
    throw error;
  }
}

export async function logout() {
  try {
    const response = await axios.get(`${BACKEND_URL}user/logout`, {
      withCredentials: true,
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error While Logging out', error);
    throw error;
  }
}
