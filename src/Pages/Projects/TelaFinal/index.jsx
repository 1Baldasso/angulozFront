import Header from '../../../Components/Header/index'
import { Container, Row, Col } from 'react-bootstrap';
import CarroselProjetos from '../../../Components/CarroselProjetos';
import './style.css'
function ProjetosFinais() {
    return ( 
    <>
     <Header></Header>
     <Container>
        <Row className='pt-3 '>
            <Col className='col-lg-4 col-sm-4 fontezinha'>
            <h1 className='fontezinha'>Titulo do Projeto</h1>
            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem assumenda culpa nobis deleniti ut laudantium sint! Aperiam debitis atque consectetur quibusdam provident delectus fugit distinctio officiis in. Esse, repudiandae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse temporibus quisquam, perspiciatis est ipsam quaerat commodi vero id fugit, deserunt accusamus corporis. Autem aliquid in eaque modi odio dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, cumque facilis nulla culpa mollitia animi corporis minima excepturi numquam sunt optio et, nemo ipsum necessitatibus ea! Voluptas consectetur facilis id?
            </p>
            </Col>
            <Col className='col-lg-8 col-sm-8'>
                <CarroselProjetos></CarroselProjetos>
            </Col>
        </Row>
     </Container>
    </> 
    );
}

export default ProjetosFinais;