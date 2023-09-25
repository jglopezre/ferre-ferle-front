import { Container } from 'reactstrap';
import { FooterSection, HeaderSection } from './sections';
import { LayoutProps } from '../types';

// eslint-disable-next-line import/prefer-default-export
export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <HeaderSection />
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        {children}
      </div>
      <FooterSection />
    </Container>
  );
}
