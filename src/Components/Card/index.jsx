import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Fonts } from "react-bootstrap-icons";
import './styles.css'
export default function ProdutoItem(props) {
    return (
        <Card className="card-parent">
            
                <div className="d-flex flex-column justify-self-center ">
                    <Card.Subtitle>{props.produto.categoria}</Card.Subtitle>
                </div>
            <div className="hover-image">
            <a className="d-flex portfolio-box" href={`/projetos/2`}>
                <Card.Img src={props.produto.imagens[1]} alt={props.produto.nome} className="hoveriano" /> 
                <span class="texto">{props.produto.titulo}</span>  
            </a>
            </div>
        </Card>
    );
}