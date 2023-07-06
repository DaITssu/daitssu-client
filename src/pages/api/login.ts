import { User, UserResponse } from '../../models/UserDTO';

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserResponse> => {
  const response = await fetch('https://api.realworld.io/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: { email, password } }),
  });

  if (response.status !== 200) {
    throw new Error('Login failed');
  }

  return response.json();
};
