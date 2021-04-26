import { Nav, NavLink, HorizontalNav, Logo, StyledMenu, StyledExit, Container } from './NavBar.styles'
import { useState } from 'react'

const NavBar = () => {

    const [open, setOpen] = useState(false)

    return (
        <Nav>
            <Container>
                <Logo to="/">Logo</Logo>
                <HorizontalNav open={open} onClick={() => setOpen(!open)}>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/acerca">Acerca</NavLink>
                    <NavLink to="/personal">Nuestro personal</NavLink>
                    <NavLink to="/noticias">Noticias</NavLink>
                    <NavLink to="/galeria">Galería</NavLink>
                    <NavLink to="/pacientes">Pacientes</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                </HorizontalNav>
                <StyledMenu open={open} onClick={() => setOpen(!open)} />
                <StyledExit open={open} onClick={() => setOpen(!open)} />
            </Container>
        </Nav>
    )
}

export default NavBar