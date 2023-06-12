import { useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Header from '../../../Components/Header/index'
import { Container, Row, Col } from 'react-bootstrap';
import ProjetosService from '../../../Services/projetos.service';
import { LanguageContext } from '../../../Providers/LanguageProvider';
import './style.css'

function ProjetosFinais() {
    const { id } = useParams();
    const service = new ProjetosService();
    const [projeto, setProjeto] = useState({});
    const [imagens, setImagens] = useState([]);
    const { language } = useContext(LanguageContext);
    const fetchProjeto = async () => {
        const projetoLocal = localStorage.getItem('projetos');
        if (projetoLocal) {
            const projetos = JSON.parse(projetoLocal);
            const projetoItemLocal = projetos.find((projeto) => projeto.id === id);
            setProjeto(projetoItemLocal);
            if(language === 'br' && projetoItemLocal.imagens !== imagens){
                setImagens(projetoItemLocal.imagens);
            }
            return;
        }
        const projeto = await service.getOne(id,language);
        setProjeto(projeto);
        if(language === 'br' && projeto.imagens !== imagens){
            setImagens(projeto.imagens);
        }
    }
    useEffect(() => {
        fetchProjeto();
    }, [language]);
        
    return (
        <>
            <Header></Header>
            <Container>
                <Row className='d-flex pt-3'>
                    <h1 className=''>{projeto.titulo}</h1>
                    <Col lg={4} className=' d-flex fontezinha'>
                        <p className='pt-2 text-align-justify'>
                            {
                                projeto.descricao && projeto.descricao.split('\n').map((item, index) => {
                                    return (
                                        <span key={index}>
                                            {item}
                                            <br />
                                        </span>
                                    )
                                })
                            }
                        </p>
                    </Col>
                    <Col lg={8}>
                        <div className='d-flex flex-column'>
                            {imagens && imagens.map((imagem, index) => {
                                return (
                                    <img key={index} className='classificandoContainer tamanhoImagem pt-3' src={`data:image/png;base64, ${imagem}`} alt="" />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProjetosFinais;