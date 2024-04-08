import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <Form className='contacto'>
        <h3>Cuentanos, ¿en qué te podemos ayudar?</h3>
        <Form.Group className="correo mb-3">
            <Form.Label>Correo:</Form.Label>
            <Form.Control className='cuadroCorreo' type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="descripcion mb-3 ">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control className='cuadroDescripcion' type="text" placeholder="Comentanos tus dudas" />
        </Form.Group>

        <Button variant="danger" type="submit">
            Enviar
        </Button>
  </Form>
);
}

export default Contacto
