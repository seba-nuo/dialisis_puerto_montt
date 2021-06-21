import { Nav, NavLink, HorizontalNav, Logo, StyledMenu, StyledExit, Container } from './NavBar.styles'
import { useState } from 'react'

const NavBar = () => {

    const [open, setOpen] = useState(false)

    return (
        <Nav>
            <Container>
                <Logo to="/">Logo</Logo>
                <HorizontalNav open={open}>
                    {/* TODO: Refactorizar pls (HOC?) */}
                    <NavLink to="/" onClick={() => setOpen(!open)}>Inicio</NavLink>
                    <NavLink to="/acerca" onClick={() => setOpen(!open)}>Acerca</NavLink>
                    <NavLink to="/personal" onClick={() => setOpen(!open)}>Nuestro personal</NavLink>
                    <NavLink to="/noticias" onClick={() => setOpen(!open)}>Noticias</NavLink>
                    <NavLink to="/galeria" onClick={() => setOpen(!open)}>Galería</NavLink>
                    <NavLink to="/pacientes" onClick={() => setOpen(!open)}>Pacientes</NavLink>
                    <NavLink to="/contacto" onClick={() => setOpen(!open)}>Contacto</NavLink>
                </HorizontalNav>
                <StyledMenu open={open} onClick={() => setOpen(!open)} />
                <StyledExit open={open} onClick={() => setOpen(!open)} />
            </Container>
        </Nav>
    )
}

export default NavBar