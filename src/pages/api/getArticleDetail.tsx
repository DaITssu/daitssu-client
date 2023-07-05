import axios from 'axios';

export const getArticleDetail = async (articleName?: String) => {
  try {
    console.log(articleName);
    const response = await axios.get(
      `https://api.realworld.io/api/articles/${articleName}`,
      {},
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
