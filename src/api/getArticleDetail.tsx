import axios from 'axios';

export const getArticleDetail = async (articleName?: String) => {
  try {
    const response = await axios.get(
      `https://api.realworld.io/api/articles/${articleName}`,
      {},
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
