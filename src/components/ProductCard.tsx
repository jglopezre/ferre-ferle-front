import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import { ProductCardProps } from '../types';
import { ImageHolder } from './ImageHolder';
import { CartContext } from '../contexts';
// eslint-disable-next-line import/prefer-default-export
export function ProductCard(props: ProductCardProps) {
  const {
    id, imageUrl, name, code, description, price,
  } = props;

  const { dispatch } = useContext(CartContext);

  const onAddCartHandle = () => {
    dispatch({
      type: 'CART_REDUCER-add-product',
      payload: {
        id, imageUrl, name, code, description, price,
      },
    });

    console.log(`Producto id: ${id} agregado al carrito`);
  };

  return (
    <Card color="white" style={{ width: '19rem' }}>
      <ImageHolder url={imageUrl} alt={name} wrapperSize={{ width: '100%', height: 200 }} />
      <CardBody>
        <CardTitle tag="h2">
          <Link to={`/productDetail/id=${id}`}>
            {name}
          </Link>
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {`cod. ${code}`}
        </CardSubtitle>
        <CardText>
          {description}
        </CardText>
        <CardText className="text-center">
          precio:&nbsp;
          <strong style={{ fontSize: '1.6rem' }}>{price}</strong>
          &nbsp;$USD
        </CardText>
        <Button onClick={() => onAddCartHandle()} color="primary" className="w-100">
          Agregar al Carrito
        </Button>
      </CardBody>
    </Card>
  );
}
