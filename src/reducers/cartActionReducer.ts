import { CartReducerAction, ProductList } from '../types';

// eslint-disable-next-line import/prefer-default-export
export function cartActionReducer(state: ProductList, action: CartReducerAction): ProductList | [] {
  let newState = (action.type === 'CART_REDUCER-add-product' || action.type === 'CART_REDUCER-remove-product')
    ? structuredClone(state)
    : [];

  switch (action.type) {
    case 'CART_REDUCER-add-product':
      newState?.push(action.payload);
      break;
    case 'CART_REDUCER-remove-product':
      newState?.filter((element) => element.id !== action.payload!!.id);
      break;

    case 'CART_REDUCER-clear-list':
      newState = [];
      break;
    default:
      return state;
  }
  return newState;
}
