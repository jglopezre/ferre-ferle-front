import { Container } from 'reactstrap';
import { UserRegisterForm } from '../components/forms';

// eslint-disable-next-line import/prefer-default-export
export function UserRegisterPage() {
  return (
    <Container>
      <h1>Soy Usuario de registro</h1>
      <UserRegisterForm />
    </Container>
  );
}
