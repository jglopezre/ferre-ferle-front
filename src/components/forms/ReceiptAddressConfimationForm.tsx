import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';

// eslint-disable-next-line import/prefer-default-export
export function ReceiptAddresConfirmationForm() {
  const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    const receiptAddress = (event.currentTarget[0] as HTMLInputElement).value;
    console.table({ receiptAddress });
  };

  const onCancelHandle = () => {
    console.log('Cancel Button pressed');
  };

  return (
    <div className="p-3 shadow" style={{ minWidth: '360px', maxWidth: '600px' }}>
      <Form onSubmit={onSubmitHandle}>
        <legend>Confirme su dierección</legend>
        <br />
        <p>Puede modificar la dirección para recibir su pedido</p>
        <Row>
          <FormGroup>
            <Label>Dirección de Entrega</Label>
            <Input type="textarea" />
          </FormGroup>
        </Row>
        <Row>
          <Col sm={{ size: 3, offset: 6 }}>
            <Button onClick={() => onCancelHandle} color="primary" outline style={{ width: '100%' }}>Cancelar</Button>
          </Col>
          <Col sm={{ size: 3 }}>
            <Button color="primary" style={{ width: '100%' }}>Confirmar</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
