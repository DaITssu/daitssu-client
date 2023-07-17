import axios from 'axios';

export const signup = async (
  username: String,
  email: String,
  password: String,
) => {
  try {
    const response = await axios.post('https://api.realworld.io/api/users', {
      user: {
        username,
        email,
        password,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
