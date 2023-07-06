import axios from 'axios';

export const getArticles = async (page: number) => {
  try {
    const response = await axios.get('https://api.realworld.io/api/articles', {
      params: {
        limit: 10,
        offset: page * 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
