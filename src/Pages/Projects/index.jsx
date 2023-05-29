import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../Components/Header'
import ProdutoItem from '../../Components/Card'
import { getProjetos } from './projetos.services'

export default function Produtos() {
  const originalProdutos = async () => await getProjetos();

  const [produtos, setProdutos] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {

    async function fetchProdutos() {
      try {
        const produtos = await getProjetos();
        setProdutos(produtos);
      } catch (error) {
        // Handle error
      }
    }

    window.onresize = () => {
      setWidth(document.body.clientWidth);
    }

    fetchProdutos();
  }, []);

  return (
    <>
    <Header/>
      <main className='pt-5 d-flex'>
      <Container>
        <h2>Nossos Projetos</h2>
        <div className=' pt-2 d-flex flex-row justify-content-around'>
        <Row md={width > 1024 ? 3 : width > 600 ? 2 : 1} className={`g-4 gx-1 ${width < 700 ? 'flex-column' : ''}`}>
          {produtos.map((produto) => {
            return (
              <Col key={produto._id}>
                <ProdutoItem key={produto._id + "PI"} produto={produto} />
              </Col>
            )
          })}
        </Row>
          </div>
      </Container>
    </main>
    </>
  )
}