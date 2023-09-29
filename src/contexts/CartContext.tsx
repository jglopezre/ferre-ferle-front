import { createContext } from 'react';
import { CartContextType } from '../types';
// import { ProductList } from '../types';

/* const productList: ProductList = [
  {
    id: '',
    imageUrl: '',
    name: '',
    code: '',
    description: '',
    price: 0,
    quantity: 0,
  },
]; */

const defaultValue: CartContextType = {
  state: [],
  dispatch: () => {},
};

// eslint-disable-next-line import/prefer-default-export
export const CartContext = createContext(defaultValue);
