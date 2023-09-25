import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProductCardProps } from '../types';
import { ProductCard } from './ProductCard';

const products: Array<ProductCardProps> = [
  {
    id: 'aaaa-bbbb-000001',
    imageUrl: 'https://picsum.photos/300/200',
    name: 'Tornillo #6',
    code: 'xxx-yyy-0001',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 100.00,
  },
  {
    id: 'aaaa-bbbb-000002',
    imageUrl: 'https://picsum.photos/300/200',
    name: 'Tuerca',
    code: 'xxx-yyy-0002',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 200.00,
  },
  {
    id: 'aaaa-bbbb-000003',
    imageUrl: 'https://picsum.photos/300/200',
    name: 'Brocha',
    code: 'xxx-yyy-0003',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 300.00,
  },
  {
    id: 'aaaa-bbbb-000004',
    imageUrl: 'https://picsum.photos/300/200',
    name: 'Tarugo #6',
    code: 'xxx-yyy-0004',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 400.00,
  },
  {
    id: 'aaaa-bbbb-000005',
    imageUrl: 'https://picsum.photos/300/200',
    name: 'Dest. Philips',
    code: 'xxx-yyy-0005',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 500.00,
  },
  {
    id: 'aaaa-bbbb-000006',
    imageUrl: 'https://picsum.photos/300/200',
    name: 'Taladro',
    code: 'xxx-yyy-0006',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 10.00,
  },
  {
    id: 'aaaa-bbbb-000007',
    imageUrl: 'https://picsum.photos/300/200',
    name: 'Foco 7W',
    code: 'xxx-yyy-0007',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 20.00,
  },
  {
    id: 'aaaa-bbbb-000008',
    imageUrl: 'https://picsum.photos/300/200',
    name: 'Cinta Aisladora',
    code: 'xxx-yyy-0008',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    price: 30.00,
  },
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

// eslint-disable-next-line import/prefer-default-export
export function ProductCarousel() {
  const items = products.map((product) => <ProductCard {...product} />);

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoWidth
    />
  );
}
/* export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    const nextIndex = activeIndex === products.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? products.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = products.map((product) => (
    <CarouselItem
      key={product.id}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      className="border"
    >
      <ProductCard {...product} />
    </CarouselItem>
  ));

  return (
    <div className="w-100 border p-3">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={undefined}
        dark
        className="border"
      >
        <CarouselIndicators
          items={products}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
} */
