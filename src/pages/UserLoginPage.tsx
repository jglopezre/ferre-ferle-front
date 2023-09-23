import { Container } from 'reactstrap';
import { LoginForm } from '../components/forms';

// eslint-disable-next-line import/prefer-default-export
export function UserLoginPage() {
  return (
    <Container>
      <h1>Login page</h1>
      <LoginForm />
    </Container>
  );
}
