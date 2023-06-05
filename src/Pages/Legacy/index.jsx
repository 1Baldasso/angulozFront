import React, {useContext} from "react";
import Header from "../../Components/Header";
import { Container } from "react-bootstrap";
import Logo from '../../Images/Logo.png';
import Frase from '../../Images/telaHome/Frase.png'
import './style.css'
import { LanguageContext } from "../../Providers/LanguageProvider";
import LegadoData from "../../Documents/LegadoData";
function Legado() {
    const {language} = useContext(LanguageContext);
    return (
        <>

            <Header />
            <Container className="vhconfig">

                <h1 className="text-center tamanhao pt-3 pb-2">{LegadoData.legado[language]}</h1>
                <hr />
                <h2 className='text-center' >Mude o Λngulo, <br></br>
                    o ponto de vista transforma o resultado</h2><hr />
                <div className="align-items-center justify-content-center">
                    <div className="d-flex vhconfig placeitem col-12 ">

                        <p className="textoConfig pr-3">
                           {LegadoData.descricao[language]}</p>
                        <div className=" espaco pl-2 col-6">
                            <img className="imgTamanho " src={Logo} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Legado;