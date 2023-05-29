import Carousel from 'react-bootstrap/Carousel';
import TelaInicial from '../../Images/telaHome/TelaInicial.jpeg';
import Frase from '../../Images/telaHome/Frase.png'
import './styles.css';

function SlideShow() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item className='tamanho'>
        <img
          className="tamanhoImage d-block w-100 h-100"
          src='https://cdn.pixabay.com/photo/2023/02/09/07/12/building-7778119_1280.jpg'
          alt="First slide"
        />
        <Carousel.Caption  className='w-50 alinhando' >
          <h2 className='fraseEfeito' >Mude o  <img className="tamanhoFuncao" src={Frase} alt="" />, <br></br>
          o ponto de vista pode mudar o resultado</h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className="tamanhoImage d-block w-100 h-100"
          src={TelaInicial}
          alt="Second slide"
        />

        <Carousel.Caption  className='w-50 alinhando'>
        <h2 className='fraseEfeito' >Mude o <img className="tamanhoFuncao" src={Frase} alt="" />, <br></br>
          o ponto de vista pode mudar o resultado</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className=" tamanhoImage d-block w-100 h-100"
          src={TelaInicial}
          alt="Third slide"
        />

        <Carousel.Caption className='w-50 alinhando'>
        <h2 className='fraseEfeito' >Mude o <img className="tamanhoFuncao" src={Frase} alt="" />, <br></br>
          o ponto de vista pode mudar o resultado</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;