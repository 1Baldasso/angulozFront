import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import ImageUpload from './excloi';
function Acesso() {
    const [texto, setTexto] = useState('');
    // const [images, setImages] = useState([])
    // const [imagesPreview, setImagesPreview] = useState([])
    const handleChange = (event) => {
        setTexto(event.target.value);
    }

    // const handleFileChange = (event) => {
    //     const files = event.target.files
    //     const newSelectedFiles = Array.from(files);
    //     setImages([...images, ...newSelectedFiles])
    //     setImages(files);
    //     const newImagesPreview = []
    //     for (let i = 0; i < files.length; i++) {
    //         const file = newSelectedFiles[i];
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             newImagesPreview.push(reader.result);
    //             if (newImagesPreview.length === newSelectedFiles.length) {
    //                 setImagesPreview([...imagesPreview, ...newImagesPreview]);
    //             }
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // }

    return (
        <Container className='d-flex justify-content-center aligni-itens-center text-center'>
            <Form>
                <div className='col-lg-12 col-sm-4 justify-content-center aligni-itens-center text-center'>
                    <Form.Group className="mb-3 pt-2" controlId="formBasicEmail">
                        <Form.Label><h3>Titulo do Projeto</h3></Form.Label>
                        <Form.Control type="Text" placeholder="Título" />
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
                        <p>{texto}</p>
                    </div>
                </div>
                <ImageUpload />

                <div className='fixed-bottom pb-5'>
                    <Button className='mt-3' variant="success" type="submit">
                        Criar Novo Projeto.
                    </Button>{'  '}
                </div>
            </Form>
        </Container>
    );
}

export default Acesso;