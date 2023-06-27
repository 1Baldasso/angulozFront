import React, { useContext } from "react";
import Header from "../../Components/Header";
import { Container } from "react-bootstrap";
import mariza from '../../Images/telaLegado/mariza.png';
import brenda from '../../Images/telaLegado/brenda.png';
import './style.css';
import { LanguageContext } from "../../Providers/LanguageProvider";
import LegadoData from "../../Documents/LegadoData";
function Legado() {
    const { language } = useContext(LanguageContext);
    return (
        <>

            <Header />
            <Container className="vhconfig">
                {/* <h1 className="text-center tamanhao pt-3 pb-2">{LegadoData.legado[language]}</h1> */}
                <div className="align-items-center justify-content-center">
                    <div className="d-flex vhconfig placeitem col-12 ">
                        <div>
                            <br />
                            <h2 className="textoConfig text-center pr-3">
                                {LegadoData.descricao[language]}</h2>
                            <br />
                            <p className="textoConfig pr-3">
                                &emsp;    {LegadoData.descricao2[language]}</p>

                            <p className="textoConfig pr-3">
                                &emsp;  {LegadoData.descricao3[language]}</p>
                            <br />
                            <h3 className="textoConfig text-center pr-3">
                                {LegadoData.descricao4[language]}</h3>
                            <br />
                            <p className="textoConfig pr-3">
                                &emsp;  {LegadoData.descricao5[language]}</p>
                                <br />
                            <p className="textoConfig pr-3">
                                <i>&emsp;  {LegadoData.descricao6[language]}
                                    </i> </p>
                            <p  className="textoConfig  text-end pr-3">
                              <i> &emsp;  {LegadoData.descricao7[language]}</i> </p>
                              <br />
                              <p className="textoConfig pr-3">
                                <i>&emsp;  {LegadoData.descricao8[language]}
                                    </i> </p>
                            <p  className="textoConfig  text-end pr-3 pb-4">
                              <i> &emsp;  {LegadoData.descricao9[language]}</i> </p>


                        </div>


                        <div className=" espaco pl-2 ">
                            <img className="imgTamanho espaco" src={mariza} alt="" />
                            <div className="imgTamanhofoto">

                                <h4>Mariza Da Silveira</h4>
                                <p>Arquiteta e Urbanista - CAU N° A269214-7</p>
                            </div>

                            <img className="imgTamanho espaco" src={brenda} alt="" />
                            <div className="imgTamanhofoto">

                                <h4>Brenda Giordani </h4>
                                <p>Engenheira Eletricista - CREA N° PR-198053-D</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Legado;