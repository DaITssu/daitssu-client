import axios from 'axios';

export const login = async (email: String, password: String) => {
  try {
    const response = await axios.post(
      'https://api.realworld.io/api/users/login',
      {
        user: {
          email,
          password,
        },
      },
    );

    console.log('login successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('login failed:', error);
  }
};
