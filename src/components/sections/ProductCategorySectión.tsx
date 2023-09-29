import { Container } from 'reactstrap';
import { ProductCarousel } from '../ProductCarousel';
import { ProductCategorySectionProps } from '../../types';
import styles from '../../scss/productCategorySectionStyle.module.scss';

// eslint-disable-next-line import/prefer-default-export
export function ProductCategorySection({ sectionElement }: ProductCategorySectionProps) {
  const { sectionImageUrl, sectionName, productList } = sectionElement;

  return (
    <Container className="p-0" tag="section">
      <div className={styles.imageHolder} style={{ backgroundImage: `url("${sectionImageUrl}")` }}>
        <div>{/* Image container */}</div>
        <h1 className="text-primary">{sectionName}</h1>
      </div>
      <br />
      <ProductCarousel productList={productList} />
    </Container>
  );
}
