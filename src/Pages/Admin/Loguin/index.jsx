import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from '../../../Images/Logo.png'
import './style.css'
function Loguin() {
    return (
        <Container className='d-flex justify-content-center align-itens-center'>
            <div className='pt-5'>
                <img className='w-50 d-flex ' src={Logo} alt="" />
                <div className='flex-column'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Loguin de Admin</Form.Label>
                            <Form.Control type="text" placeholder="Usuário" />
                            <Form.Text className="text-muted">
                                Se você não possui o usuário por favor contate o fabricante.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button className='col-lg-12 text-center' variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </div>
            </div>        </Container>
    );
}

export default Loguin;