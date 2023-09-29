import { useReducer } from 'react';
import { CartContext } from './CartContext';
import { ProductList } from '../types';
import { cartActionReducer } from '../reducers/cartActionReducer';

interface ContextProviderProps {
  children: JSX.Element
}
// eslint-disable-next-line import/prefer-default-export
export function CartContextProvider({ children }: ContextProviderProps) {
  const defaultstate: ProductList = [];

  const [state, dispatch] = useReducer(cartActionReducer, defaultstate);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
