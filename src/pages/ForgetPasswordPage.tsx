import { Container } from 'reactstrap';
import { PasswordForgetForm } from '../components/forms';

// eslint-disable-next-line import/prefer-default-export
export function ForgetPasswordPage() {
  return (
    <Container>
      <h1>Soy Olvide mi contraseña</h1>
      <PasswordForgetForm />
    </Container>
  );
}
