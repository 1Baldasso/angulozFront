import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../../Images/telaHome/slide1.jpg';
import slide2 from '../../Images/telaHome/slide2.jpg';
import slide3 from '../../Images/telaHome/slide3.jpg';
import slide4 from '../../Images/telaHome/slide4.jpg';
import slide5 from '../../Images/telaHome/slide5.jpg';
import slide6 from '../../Images/telaHome/slide6.jpg';

import './styles.css';

function SlideShow() {
  return (
    <Carousel controls={false} indicators={false} interval={2000}>
      <Carousel.Item className='tamanho'>
        <img
          className="tamanhoImage d-block w-100 h-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className="tamanhoImage d-block w-100 h-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className=" tamanhoImage d-block w-100 h-100"
          src={slide3}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className=" tamanhoImage d-block w-100 h-100"
          src={slide4}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className=" tamanhoImage d-block w-100 h-100"
          src={slide5}
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item className='tamanho'>
        <img
          className=" tamanhoImage d-block w-100 h-100"
          src={slide6}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;