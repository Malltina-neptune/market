export const GET_PRODUCTS = 'GET_PRODUCTS';

const API_URL = 'https://api.malltina.net/search/v2?q=shoes';

export const getProducts = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      const products = json.products;
      if (products) {
        dispatch({
          type: GET_PRODUCTS,
          payload: products,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
