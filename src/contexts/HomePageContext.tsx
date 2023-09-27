import { createContext } from 'react';
import { ProductsBySection } from '../types';

const value: Array<ProductsBySection> = [
  {
    sectionId: '',
    sectionName: '',
    productList: [
      {
        id: '',
        imageUrl: '',
        name: '',
        code: '',
        description: '',
        price: 0,
      },
    ],
  },
];

// eslint-disable-next-line import/prefer-default-export
export const HomePageContext = createContext(value);
