import { Col, Row } from 'reactstrap';
import { ImageHolder } from './ImageHolder';
import { ProducCartItemProps } from '../types';
import { TrashButton } from './buttons';

const THUMBNAIL_SIZE = 64;
// eslint-disable-next-line import/prefer-default-export
export function ProductListItemCard(props: ProducCartItemProps) {
  const {
    id, imageUrl, name, price, quantity,
  } = props;

  const totalPrice = (qtity: number): number => price * qtity;

  const onDeleteHandle = () => {
    console.log(id);
  };

  return (
    <Row className="border">
      <Col>
        <ImageHolder
          url={imageUrl}
          alt={name}
          wrapperSize={{ width: THUMBNAIL_SIZE, height: THUMBNAIL_SIZE }}
          imageSize={{ width: THUMBNAIL_SIZE, height: THUMBNAIL_SIZE }}
        />
      </Col>
      <Col>
        <h2>Producto</h2>
        <p>{name}</p>
      </Col>
      <Col>
        <h2>Precio</h2>
        <p>{`${price} $usd`}</p>
      </Col>
      <Col>
        <h2>Cantidad</h2>
        <p>{quantity}</p>
      </Col>
      <Col>
        <h2>Total</h2>
        <p><strong>{`${totalPrice(quantity)} $usd`}</strong></p>
      </Col>
      <Col>
        <TrashButton onClick={() => onDeleteHandle()} size="24px" />
      </Col>
    </Row>
  );
}
