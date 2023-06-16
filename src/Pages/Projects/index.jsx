import { useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../../Components/Header'
import ProjetoItem from '../../Components/Card'
import ProjetosService from '../../Services/projetos.service'
import DropdownCategorias from '../../Components/DropdownCategorias'
import { LanguageContext } from '../../Providers/LanguageProvider'
import './style.css'
import Loading from '../../Components/Loading'

export default function Produtos() {
  const service = new ProjetosService();
  const { language } = useContext(LanguageContext);
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);



  useEffect(() => {
    async function fetchProjetos() {
      const projetosLocal = localStorage.getItem('projetos');
      if (projetosLocal) {
        setProjetos(JSON.parse(projetosLocal));
        return;
      }
      try {
        setLoading(true);
        const projetos = await service.getAll(language);
        setProjetos(projetos);
        setLoading(false);
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

    document.addEventListener('categoriaChange', (event) => {
      const categoria = event.detail;
      let localProjetos = localStorage.getItem('projetos');
      if (categoria === 'Todos') {
        if (!localProjetos) {
          fetchProjetos();
          return;
        }
        setProjetos(JSON.parse(localProjetos));
        return;
      }
      const projetosFiltrados = projetos.filter((projeto) => {
        return projeto.categoria === categoria;
      })
      setProjetos(projetosFiltrados);
    })

    fetchProjetos();
  }, []);

  return (
    <>
    <Header/>
      <main className='pt-5'>
      <Container>
        <DropdownCategorias />
        {loading && <Loading/>}
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