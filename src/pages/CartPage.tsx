import { Container } from 'reactstrap';
import { ProductListItemCard } from '../components/ProductListItemCard';
import { ProducCartItemProps } from '../types';

const product: ProducCartItemProps = {
  id: 'aaaa-bbbb-000001',
  imageUrl: 'https://thumbs2.imgbox.com/45/c5/ML0vesix_t.jpg',
  name: 'Tornillo #6',
  code: 'xxx-yyy-0001',
  price: 100.00,
  quantity: 1,
};
// eslint-disable-next-line import/prefer-default-export
export function CartPage() {
  return (
    <Container>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ProductListItemCard {...product} />
    </Container>
  )
}