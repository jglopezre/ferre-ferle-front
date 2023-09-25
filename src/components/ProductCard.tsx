import { Link } from 'react-router-dom';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';
import { ProductCardProps } from '../types';

// eslint-disable-next-line import/prefer-default-export
export function ProductCard(props: ProductCardProps) {
  const {
    id, imageUrl, name, code, description, price,
  } = props;

  const onClickHandle = () => {
    console.log(`Producto id: ${id} agregado al carrito`);
  };

  return (
    <Card color="white" style={{ width: '18rem' }}>
      <img
        alt={name}
        src={imageUrl}
      />
      <CardBody>
        <CardTitle tag="h2">
          <Link to="./productDetail">
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
        <Button onClick={() => onClickHandle()} color="primary" className="w-100">
          Agregar al Carrito
        </Button>
      </CardBody>
    </Card>
  );
}