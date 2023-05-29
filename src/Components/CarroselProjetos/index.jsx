import Carousel from 'react-bootstrap/Carousel';
import PrimeiraCasa from '../../Images/telaProjects/PrimeiraCasa.jpg'
import SegundaCasa from '../../Images/telaProjects/SegundaCasa.jpg'
import PrimeiraCasa3 from '../../Images/telaProjects/PrimeiraCasa3.jpg'
function CarroselProjetos() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PrimeiraCasa}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PrimeiraCasa3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarroselProjetos;