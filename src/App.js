import 'bootstrap/dist/css/bootstrap.min.css';
import { Whatsapp,GeoAlt,Envelope,Instagram,Telephone } from "react-bootstrap-icons";
import './App.css';
import Home from './Pages/Home';
import Legado from './Pages/Legacy';
import Contato from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Loguin from './Pages/Admin/Loguin';
import Acesso from './Pages/Admin/Acesso';
import Projeto from './Pages/Projects';
import ProjetosFinais from './Pages/Projects/TelaFinal';
import { LanguageProvider } from './Providers/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/Home' Component={Home}/>
        <Route path='/legado' Component={Legado}/>
        <Route path='/contato' Component={Contato}/>
        <Route path='/projetos' Component={Projeto}/>
        <Route path='/projetos/2' Component={ProjetosFinais}/>
        <Route path='/adminAnguloZ' Component={Acesso}/>
        <Route path='/loguinAdmin' Component={Loguin}/>
      </Routes>
    </LanguageProvider>
  );
}

export default App;
