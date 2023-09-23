import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';

// eslint-disable-next-line import/prefer-default-export
export function UserRegisterForm() {
  const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const firstName = (event.currentTarget[0] as HTMLInputElement).value;
    const lastName = (event.currentTarget[1] as HTMLInputElement).value;
    const companyName = (event.currentTarget[2] as HTMLInputElement).value;
    const rifNumber = (event.currentTarget[3] as HTMLInputElement).value;
    const phoneNumber = (event.currentTarget[4] as HTMLInputElement).value;
    const emailAddress = (event.currentTarget[5] as HTMLInputElement).value;
    const receiptAddress = (event.currentTarget[6] as HTMLInputElement).value;
    const password = (event.currentTarget[7] as HTMLInputElement).value;
    const confirmationPassword = (event.currentTarget[8] as HTMLInputElement).value;

    console.table({
      firstName,
      lastName,
      companyName,
      rifNumber,
      phoneNumber,
      emailAddress,
      receiptAddress,
      password,
      confirmationPassword,
    });
  };

  return (
    <div className="p-3 shadow" style={{ minWidth: '360px', maxWidth: '600px' }}>
      <Form onSubmit={onSubmitHandle}>
        <legend>Regsitro de Nuevo Usuario</legend>
        <br />
        <Row className="mt-2">
          <Col sm={6}>
            <FormGroup>
              <Label for="first-name">Nombre</Label>
              <Input type="text" id="first-name" placeholder="Pedro" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="last-name">Apellido</Label>
              <Input type="text" id="last-name" placeholder="Perez" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm={6}>
            <FormGroup>
              <Label for="company">Empresa o Compañía</Label>
              <Input type="text" id="company" placeholder="Mi Empresa" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="rif">RIF</Label>
              <Input type="text" id="rif" placeholder="11-23456789-0" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm={6}>
            <FormGroup>
              <Label for="phone">Teléfono de contacto</Label>
              <Input type="tel" id="phone" placeholder="222-3334455" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="email">Correo Electrónico</Label>
              <Input type="text" id="email" placeholder="pedroperez@miempresa.com.ve" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-2">
          <FormGroup>
            <Label for="address">Dirección de Entrega</Label>
            <Input type="textarea" id="address" />
          </FormGroup>
        </Row>
        <Row className="mt-2">
          <Col sm={6}>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="password" id="password" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="password-confirmation">Repita su Contraseña</Label>
              <Input type="text" id="password-confirmation" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={{ size: 4, offset: 4 }}>
            <Button color="primary" outline style={{ width: '100%' }}>Cancelar</Button>
          </Col>
          <Col sm={{ size: 4 }}>
            <Button color="primary" style={{ width: '100%' }}>Enviar</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
