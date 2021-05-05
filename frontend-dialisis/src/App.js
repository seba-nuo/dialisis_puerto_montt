import { NavBar } from './components'
import { Inicio, Contacto, Acerca, ListadoNoticias, Galeria, Pacientes, Personal, Noticias } from './pages'
import GlobalFonts from './fonts/Fonts';
import "./App.css";

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <GlobalFonts/>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/acerca" component={Acerca} />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/noticias" component={ListadoNoticias} />
        <Route exact path="/galeria" component={Galeria} />
        <Route exact path="/pacientes" component={Pacientes} />
        <Route exact path="/contacto" component={Contacto} />
        <Route path="/noticias/:url" component={Noticias} />
      </Switch>
    </Router>
  );
}

export default App;
