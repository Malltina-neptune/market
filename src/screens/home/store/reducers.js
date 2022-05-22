import {GET_PRODUCTS} from './types';

const initialState = {
  products: [],
};

function productHomeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.payload};
    default:
      return state;
  }
}

export default productHomeReducer;
