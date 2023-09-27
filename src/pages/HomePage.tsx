import { useContext } from 'react';
import { ProductCategorySection } from '../components/sections';
import { ProductCardProps, ProductsBySection } from '../types';
import { HomePageContext } from '../contexts/HomePageContext';

// eslint-disable-next-line import/prefer-default-export
export function HomePage(): JSX.Element {
  const contextData = useContext(HomePageContext);
  return (
    <>
      {
        contextData.map((section, index) => (
          <ProductCategorySection key={section.sectionId} sectionPosition={index} />
        ))
      }
    </>
  );
}
