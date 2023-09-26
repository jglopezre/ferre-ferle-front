import { Container } from 'reactstrap';
import { ProductCarousel } from '../ProductCarousel';
import styles from '../../scss/productCategorySectionStyle.module.scss';

const category = 'Herramientas Electricas';
// eslint-disable-next-line import/prefer-default-export
export function ProductCategorySection() {
  return (
    <Container className="p-0" tag="section">
      <div className={styles.imageHolder}>
        <div>{/* Image container */}</div>
        <h1 className="text-primary">{category}</h1>
      </div>
      <br />
      <ProductCarousel />
    </Container>
  );
}
