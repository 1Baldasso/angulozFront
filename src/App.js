import 'bootstrap/dist/css/bootstrap.min.css';
import { Whatsapp, GeoAlt, Envelope, Instagram, Telephone } from "react-bootstrap-icons";
import './App.css';
import Home from './Pages/Home';
import Legado from './Pages/Legacy';
import Contato from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Admin/Login';
import Acesso from './Pages/Admin/Acesso';
import Projeto from './Pages/Projects';
import ProjetosFinais from './Pages/Projects/TelaFinal';
import { LanguageProvider } from './Providers/LanguageProvider';
import { AuthProvider } from './Providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/Home' Component={Home} />
          <Route path='/legado' Component={Legado} />
          <Route path='/contato' Component={Contato} />
          <Route path='/projetos' Component={Projeto} />
          <Route path='/projetos/:id' Component={ProjetosFinais} />
          <Route path='/admin' Component={Acesso} />
          <Route path='/login' Component={Login} />
        </Routes>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
