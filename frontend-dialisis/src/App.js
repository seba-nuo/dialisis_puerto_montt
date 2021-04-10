import { NavBar } from './components'
import { Inicio, Contacto, Acerca } from './pages'
import GlobalStyles from './GlobalStyles'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <GlobalStyles/>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/acerca" component={Acerca} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;
