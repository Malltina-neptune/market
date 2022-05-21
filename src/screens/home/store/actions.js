import getData from '../../../services/HomeService';
import {GET_PRODUCTS} from './types';

export const getProducts = () => {
  try {
    return async dispatch => {
      const result = await getData;
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
