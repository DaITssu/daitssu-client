// const getArticle = async (id?: number) => {};
import axios from 'axios';

export const getArticle = async () => {
  // const url = `/users/${id}/stamps`;
  try {
    const response = await axios.get('https://api.realworld.io/api/articles', {
      params: {
        limit: 10,
        offset: 0,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
  // const response = await fetch(
  //   'https://api.realworld.io/api/articles?limit=10&offset=0',
  // ).then((res) => res.json());
  // console.log(response);
  // return response;
};
