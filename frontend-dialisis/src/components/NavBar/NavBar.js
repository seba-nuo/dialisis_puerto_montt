import styled from 'styled-components'
import { Nav, NavLink, HorizontalNav, Logo, StyledMenu, StyledExit } from './NavBar.styles'
import { useState } from 'react'

const NavBar = () => {

    const Container = styled.div`
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        width: 90%;

        @media(max-width: 1050px){
            width: 100%
        }
    `

    const [open, setOpen] = useState(false)
    console.log(open);
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
                <StyledMenu open={open} onClick={() => setOpen(!open)}/>
                <StyledExit open={open} onClick={() => setOpen(!open)}/>
            </Container>
        </Nav>
    )
}

export default NavBar