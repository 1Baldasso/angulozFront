import { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../Components/Header'
import ProjetoItem from '../../Components/Card'
import ProjetosService from '../../Services/projetos.service'
import { LanguageContext } from '../../Providers/LanguageProvider'

export default function Produtos() {
  const service = new ProjetosService();
  const [projetos, setProjetos] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const { language } = useContext(LanguageContext);


  useEffect(() => {
    async function fetchProjetos() {
      const projetosLocal = localStorage.getItem('projetos');
      if (projetosLocal) {
        setProjetos(JSON.parse(projetosLocal));
        return;
      }
      try {
        const projetos = await service.getAll(language);
        setProjetos(projetos);
        projetos.map((projeto) => {
          console.log(projeto)
        })
        console.log(projetos);
      } catch (error) {
      }
    }

    window.onresize = () => {
      setWidth(document.body.clientWidth);
    }

    fetchProjetos();
  }, []);

  return (
    <>
    <Header/>
      <main className='pt-5'>
      <Container>
        <div className=' pt-2 d-flex flex-row justify-content-around'>
        <Row md={width > 1024 ? 3 : width > 600 ? 2 : 1} className={`g-4 gx-1 ${width < 700 ? 'flex-column' : ''}`}>
          {projetos.map((projeto) => {
            return (
              <Col key={projeto.id}>
                <ProjetoItem key={projeto.id + "PI"} projeto={projeto} />
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