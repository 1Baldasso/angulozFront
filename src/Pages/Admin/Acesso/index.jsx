import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, FormSelect } from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import ImageUpload from './excloi';
import UploadService from './Services/UploadService';
import { AuthContext } from '../../../Providers/AuthProvider';
function Acesso() {
    const [texto, setTexto] = useState('');
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [arquivos, setArquivos] = useState([]);

    const service = new UploadService();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token)
        {
            console.log(token)
            window.location.href = '/login';
        }
    }, []);
    const handleChange = (event) => {
        setTexto(event.target.value);
    }
    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    }
    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    }
    const validateFields = () => {
        if (titulo === '' || texto === '' || categoria === '' || arquivos.length === 0) {
            alert('Preencha todos os campos!');
            return false;
        }
        return true;
    }
    const handleNovoProjeto = () => {
        if (!validateFields())
            return;
        let projeto = {
            titulo: titulo,
            descricao: texto,
            categoria: categoria,
            imagens: arquivos
        }
        service.PostProjeto(projeto).then((response) => {
            console.log(response);
            service.PostImagem(response, arquivos).then((response) => {
                alert('Projeto criado com sucesso!');
                setTexto('');
                setTitulo('');
                setCategoria('');
                setArquivos([]);
            }).catch((error) => {
                alert('Erro adicionar imagens!' + error.message);
            });
        }).catch((error) => {
            alert('Erro ao criar projeto!\n' + error.message);
        });


    }
    return (
        <Container className='d-flex justify-content-center aligni-itens-center text-center'>
            <Form>
                <div className='col-lg-12 col-sm-4 justify-content-center aligni-itens-center text-center'>
                    <Form.Group className="mb-3 pt-2" controlId="formBasicEmail">
                        <Form.Label><h3>Titulo do Projeto</h3></Form.Label>
                        <Form.Control type="Text" placeholder="Título" value={titulo} onChange={handleTituloChange} />
                        <Form.Text className="text-muted">
                            Aqui vai ser adicionado o título que será exibido no topo do seu projeto
                        </Form.Text>
                    </Form.Group>
                    <div>
                        <h4>Adicione o texto sobre seu projeto</h4>
                        <textarea className='w-100' type="text" value={texto} onChange={handleChange} />
                        <Form.Text className="text-muted">
                            É possível aumentar a caixa de texto clicando em suas extremidades e arrastando
                        </Form.Text>
                        <h4>Selecione a Categoria</h4>
                        <FormSelect
                            value={categoria}
                            onChange={handleCategoriaChange}>
                            <option value=""></option>
                            <option value="Casa">Casas</option>
                            <option value="Apartamento">Apartamentos</option>
                            <option value="Comercial">Comercial</option>
                            <option value="Edifícios">Edifícios</option>
                            <option value="Urbanismo">Urbanismo</option>
                        </FormSelect>
                    </div>
                </div>
                <ImageUpload selectedFiles={arquivos} setSelectedFiles={setArquivos} />
                <Button className='m-3' variant="success" onClick={handleNovoProjeto}>
                    Criar Novo Projeto.
                </Button>
            </Form>
        </Container>
    );
}

export default Acesso;