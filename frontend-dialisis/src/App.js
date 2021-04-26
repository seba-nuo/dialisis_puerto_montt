import { NavBar } from './components'
import { Inicio, Contacto, Acerca, Noticias } from './pages'
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
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/noticias" component={Noticias} />
      </Switch>
    </Router>
  );
}

export default App;
