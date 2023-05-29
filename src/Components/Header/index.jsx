import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext }from 'react';
import Logo from '../../Images/Logo.png';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../Providers/LanguageProvider';
import MenuData from '../../Documents/MenuData.js';
import './style.css'
function Header() {
    const {language, changeLanguage} = useContext(LanguageContext);
    const pathname = useLocation().pathname;
    const HeaderClass = pathname === '/Home' || pathname === "/" ? 'colorHeader fixed-top' : 'bg-fundo';
    return (
        <Navbar className={HeaderClass} collapseOnSelect expand="lg">
            <Container className=''>
                <Navbar.Brand href="/Home"><img className='logo' src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className='fonte'>
                        <Nav.Link className='corfonte' href="/legado">{MenuData.legado[language]}</Nav.Link>
                        <Nav.Link href="/projetos">{MenuData.projetos[language]}</Nav.Link>
                        <Nav.Link href="/contato">{MenuData.contato[language]}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link className="meu-link" onClick={changeLanguage}>
                        <span className="material-symbols-outlined">
                            language
                        </span>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;