import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from '../../../Images/Logo.png'
import './style.css'
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useContext(AuthContext);
    useEffect(() => {
        document.title = 'Login'
    }, []);

    const handleLogin = async () => {
        console.log(username, password)
        const url = process.env.REACT_APP_ENDPOINT_API;
        await axios.post(`${url}/Auth/Login`, {
            username: username,
            password: password
        }).then((response) => {
            console.log(response.data)
            setAuth(response.data);
            window.location.href = '/admin'
        }).catch((error) => {
            console.log(error)
            alert('Erro ao fazer login!')
        });

    }
    return (
        <Container className='d-flex justify-content-center align-itens-center'>
            <div className='pt-5'>
                <img className='' src={Logo} alt="" />
                <div className='flex-column'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Loguin de Admin</Form.Label>
                            <Form.Control type="text" placeholder="Usuário" onChange={(c) => setUsername(c.target.value)} />
                            <Form.Text className="text-muted">
                                Se você não possui o usuário por favor contate o fabricante.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" onChange={(c) => setPassword(c.target.value)} />
                        </Form.Group>
                        <Button className='col-lg-12 text-center' variant="primary" onClick={handleLogin}>
                            Entrar
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default Login;