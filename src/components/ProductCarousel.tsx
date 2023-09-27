import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductCardProps } from '../types';
import { ProductCard } from './ProductCard';

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
