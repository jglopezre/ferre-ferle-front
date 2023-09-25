import {
  Col, Navbar, NavbarBrand, Row,
} from 'reactstrap';
import { SearchForm } from '../forms';
import { CartButton, PaymentButton, UserButton } from '../buttons';
import { BrandLogoHolder } from '../BrandLogoHolder';

// eslint-disable-next-line import/prefer-default-export
export function MainBar() {
  const DEFAULT_BUTTON_SIZE = '1.5rem';
  return (
    <Navbar>
      <Row className="w-100">
        <Col xl="1" className="d-flex justify-content-center">
          <NavbarBrand>
            <BrandLogoHolder size={64} />
          </NavbarBrand>
        </Col>
        <Col xl="9" className="d-flex align-items-center">
          <SearchForm />
        </Col>
        <Col xl="2" className="d-flex justify-content-around">
          <PaymentButton size={DEFAULT_BUTTON_SIZE} onClick={() => {}} />
          <UserButton size={DEFAULT_BUTTON_SIZE} onClick={() => {}} />
          <CartButton size={DEFAULT_BUTTON_SIZE} onClick={() => {}} />
        </Col>
      </Row>
    </Navbar>
  );
}
