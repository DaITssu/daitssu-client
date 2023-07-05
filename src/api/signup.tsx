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

    console.log('Registration successful:', response.data);
    return response.data;
    // Perform success actions (e.g., redirect, show success message)
  } catch (error) {
    console.error('Registration failed:', error);
    // Perform error actions (e.g., show error message)
  }
};
