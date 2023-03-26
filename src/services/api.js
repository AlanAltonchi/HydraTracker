import axios from 'axios';

export const tryLogin = async (username, password) => {
  try {
    const response = await axios.get('http://192.168.0.47:3001/api/login', { params: { username, password } });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error(error.message);
    }
  }
};