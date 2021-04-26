import { Nav, NavLink } from './NavBar.styles'

const NavBar = () => {
    return(
        <Nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/acerca">Acerca</NavLink>
            <NavLink to="/profesionañes">Profesionales</NavLink>
            <NavLink to="/galeria">Galería</NavLink>
            <NavLink to="/pacientes">Pacientes</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
        </Nav>
    )
}

export default NavBar