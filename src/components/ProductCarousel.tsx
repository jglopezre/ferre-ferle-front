import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductCardProps } from '../types';
import { ProductCard } from './ProductCard';

const products: Array<ProductCardProps> = [
  {
    id: 'aaaa-bbbb-000001',
    imageUrl: 'https://thumbs2.imgbox.com/45/c5/ML0vesix_t.jpg',
    name: 'Tornillo #6',
    code: 'xxx-yyy-0001',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 100.00,
  },
  {
    id: 'aaaa-bbbb-000002',
    imageUrl: 'https://thumbs2.imgbox.com/12/59/linzP6fN_t.jpg',
    name: 'Tuerca',
    code: 'xxx-yyy-0002',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 200.00,
  },
  {
    id: 'aaaa-bbbb-000003',
    imageUrl: 'https://thumbs2.imgbox.com/1d/37/7MCpe9e0_t.jpg',
    name: 'Brocha',
    code: 'xxx-yyy-0003',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 300.00,
  },
  {
    id: 'aaaa-bbbb-000004',
    imageUrl: 'https://thumbs2.imgbox.com/65/5c/HzlfibvL_t.jpg',
    name: 'Tarugo #6',
    code: 'xxx-yyy-0004',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 400.00,
  },
  {
    id: 'aaaa-bbbb-000005',
    imageUrl: 'https://thumbs2.imgbox.com/45/c5/ML0vesix_t.jpg',
    name: 'Dest. Philips',
    code: 'xxx-yyy-0005',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 500.00,
  },
  {
    id: 'aaaa-bbbb-000006',
    imageUrl: 'https://thumbs2.imgbox.com/12/59/linzP6fN_t.jpg',
    name: 'Taladro',
    code: 'xxx-yyy-0006',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 10.00,
  },
  {
    id: 'aaaa-bbbb-000007',
    imageUrl: 'https://thumbs2.imgbox.com/1d/37/7MCpe9e0_t.jpg',
    name: 'Foco 7W',
    code: 'xxx-yyy-0007',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 20.00,
  },
  {
    id: 'aaaa-bbbb-000008',
    imageUrl: 'https://thumbs2.imgbox.com/65/5c/HzlfibvL_t.jpg',
    name: 'Cinta Aisladora',
    code: 'xxx-yyy-0008',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 30.00,
  },
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  960: { items: 3 },
  1024: { items: 4 },
};

// eslint-disable-next-line import/prefer-default-export
export function ProductCarousel() {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const items = products.map((product) => <ProductCard {...product} />);

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableButtonsControls
    />
  );
}
