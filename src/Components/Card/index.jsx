import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Fonts } from "react-bootstrap-icons";
import './styles.css'
export default function ProjetoItem(props) {
    return (
        <Card className="card-parent">
            <div className="d-flex flex-column justify-self-center ">
            </div>
            <div className="hover-image">
                <a className="d-flex portfolio-box" href={`/projetos/${props.projeto.id}`}>
                    <Card.Img src={`data:image/png;base64, ${props.projeto.imagens[0]}`} alt={props.projeto.nome} className="hoveriano" />
                    <span className="texto">{props.projeto.titulo}</span>
                </a>
            </div>
        </Card>
    );
}