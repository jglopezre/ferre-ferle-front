import { useContext, useState } from 'react';
import { Container } from 'reactstrap';
import { ProductCategorySection } from '../components/sections';
import { productsList } from '../hardDataTest/productsLists';
import { CartContext } from '../contexts';

// eslint-disable-next-line import/prefer-default-export
export function HomePage(): JSX.Element {
  const [productsData] = useState(productsList);

  const cartData = useContext(CartContext);
  console.log(cartData.state);

  return (
    <Container className="ps-0 pe-0 vstack gap-3">
      {
        productsData.map((section) => (
          <ProductCategorySection key={section.sectionId} sectionElement={section} />
        ))
      }
      <br />
    </Container>
  );
}
