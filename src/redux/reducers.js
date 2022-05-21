import {GET_PRODUCTS} from './actions';

const initialState = {
  products: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.payload};
    default:
      return state;
  }
}

export default productReducer;
