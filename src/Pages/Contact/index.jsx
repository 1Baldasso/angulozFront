import Header from "../../Components/Header";
import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Whatsapp, GeoAlt, Envelope, Instagram, Telephone, Linkedin, Facebook, QrCodeScan, QrCode } from "react-bootstrap-icons";
import QR from '../../Images/telaContato/QR.png'
import './style.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LanguageContext } from "../../Providers/LanguageProvider";
import ContatoData from "../../Documents/ContatoData";

function Contato() {
    const {language} = useContext(LanguageContext);
    const [isRow, setIsRow] = useState(true);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); // Define o breakpoint

        // Função a ser executada quando a largura da tela mudar
        const handleMediaQueryChange = (event) => {
            if (event.matches) {
                setIsRow(false); // Se a tela for menor que 768px, muda para flex-column
            } else {
                setIsRow(true); // Caso contrário, muda para flex-row
            }
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange)
        handleMediaQueryChange(mediaQuery);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    const pureClassName = "p-3 text-center d-flex gap-5 align-items-center justify-content-between";
    let className1 = "";
    let className2 = ""
    if (!isRow) {
        className1 = pureClassName + " flex-column";
    }
    else
        className1 = pureClassName + " flex-row";


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header />
            <div className={className1}>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col-lg-6 col-sm-6">

                            <div className="tamanhotexto">
                                <h2>{ContatoData.contato[language]}</h2>
                                <div className="decorationIcons tamanhotexto">
                                    <h3>{ContatoData.contatenos[language]}</h3>
                                    <div>
                                        <ul className="decorationLi">
                                            <li>
                                                <br></br>
                                                <h4>WhatsApp</h4>
                                                <Whatsapp></Whatsapp><a href="https://wa.me/5542998223080">+55 (42) 9 9822-3080</a></li>
                                            <li>
                                                <br></br>
                                                <h4>{ContatoData.telefone[language]}</h4>
                                                <Telephone></Telephone><a href="tel:+5542998223080">+55 (42) 9 9827-1628</a></li>
                                            <li>
                                                <br></br>
                                                <h4>E-mail</h4>
                                                <Envelope></Envelope><a className="email" href="mailto:someone@example.com">angulozcontato@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                                <img className="ajustandoQR" src={QR} alt="" />
                        </div>
                        
                        <div className="col-lg-6 col-sm-6">
                            <div className="row">
                                <div className="d-flex justify-content-center align-itens-center tamanhoIcone">
                                    <a href="http://https://www.instagram.com/anguloz_/"><Instagram ></Instagram></a>
                                    <a href="http://https://www.instagram.com/anguloz_/"><Facebook ></Facebook></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="row">
                                <h2 className="localizacao">{ContatoData.localizacao[language]}</h2>
                                <Button variant="secondary" onClick={handleShow}>
                                    {ContatoData.cliqueLocal[language]}
                                </Button>

                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Google Maps</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14416.031159496863!2d-52.422005369118814!3d-25.404549840800826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94efcb08f2654839%3A0xff460016eedea0ec!2sRua%20Quinze%20de%20Novembro%20-%20Centro%2C%20Laranjeiras%20do%20Sul%20-%20PR%2C%2085301-050!5e0!3m2!1spt-BR!2sbr!4v1685235971858!5m2!1spt-BR!2sbr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            {ContatoData.fechar[language]}
                                        </Button>
                                        <Button variant="primary"><a className="" href="https://www.google.com/maps/dir//Rua+Quinze+de+Novembro+-+Centro,+Laranjeiras+do+Sul+-+PR,+85301-050/@-25.4045498,-52.4220054,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94efcb08f2654839:0xff460016eedea0ec!2m2!1d-52.4128476!2d-25.4037526?entry=ttu">Abrir Rotas
                                        </a>
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <h4></h4>
                                <p>Laranjeiras do Sul - Paraná</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contato;