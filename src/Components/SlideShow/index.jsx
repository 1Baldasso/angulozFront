import Carousel from 'react-bootstrap/Carousel';
import TelaInicial from '../../Images/telaHome/TelaInicial.jpeg';
import slide1 from '../../Images/telaHome/slide1.jpeg';
import slide4 from '../../Images/telaHome/slide4.png';
import PrimeiraCasa2 from '../../Images/telaHome/PrimeiraCasa2.jpg';
import './styles.css';

function SlideShow() {
  return (
    <Carousel controls={false} indicators={false} interval={2000}>
      <Carousel.Item className='tamanho'>
        <img
          className="tamanhoImage d-block w-100 h-100"
          src='https://cdn.pixabay.com/photo/2023/02/09/07/12/building-7778119_1280.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className="tamanhoImage d-block w-100 h-100"
          src={TelaInicial}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className=" tamanhoImage d-block w-100 h-100"
          src={slide1}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className=" tamanhoImage d-block w-100 h-100"
          src={PrimeiraCasa2}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className=" tamanhoImage d-block w-100 h-100"
          src={slide4}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;