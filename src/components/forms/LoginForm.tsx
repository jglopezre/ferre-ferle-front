import { Link, useNavigate } from 'react-router-dom';
import {
  Form, FormGroup, Input, Label, Button,
} from 'reactstrap';

// eslint-disable-next-line import/prefer-default-export
export function LoginForm() {
  const navigateTo = useNavigate();

  const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const user = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;

    console.table({ user, password });
  };

  const onCancelHandle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    navigateTo(-1);
  };

  const onRegisterHandle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    navigateTo('/userRegistration');
  };

  return (
    <div className="p-3 shadow" style={{ maxWidth: '500px', minWidth: '360px' }}>
      <Form onSubmit={onSubmitHandle}>
        <legend className="display-4">Inicie Sesión</legend>
        <br />
        <FormGroup>
          <Label for="user">Usuario</Label>
          <Input id="user" type="email" placeholder="pedroperez@micompñia.com.ve" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input id="password" type="password" />
        </FormGroup>
        <div className="d-flex justify-content-end gap-3 w-100">
          <Button onClick={onCancelHandle} color="primary" outline>Cancelar</Button>
          <Button onClick={onRegisterHandle} color="secondary">Registrar</Button>
          <Button color="primary">Entrar</Button>
        </div>
      </Form>
      <br />
      <div className="d-flex justify-content-center w-100">
        <p>
          <Link to="/forgetPassword">Restablecer</Link>
          &nbsp; su contraseña
        </p>
      </div>
    </div>
  );
}
