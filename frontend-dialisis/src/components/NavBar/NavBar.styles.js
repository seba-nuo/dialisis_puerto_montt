import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as Menu } from '../../Images/menu.svg'
import { ReactComponent as Exit } from '../../Images/x.svg'

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    background-color: #2196f3;
    box-shadow: 0px 2px 10px hsl(0, 0%, 0%, 0.5);
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:3;
`

export const HorizontalNav = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 70px;
    width: 100%;
    justify-content: flex-end;
    white-space: nowrap;

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #fff0;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        padding-top: 4.5rem;
        justify-content: flex-start;
        display: ${({open}) => open ? "flex" : "none"}
    }
`
export const NavLink = styled(Link)`
    color: hsl(0, 0%, 100%);
    text-decoration: none;
    padding: 0px 1rem;
    height: 100%;
    box-sizing: border-box;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    margin: 0;

    :hover {
        color: #d2d2d2;
    }

    @media (max-width: 945px) {   
        padding: 0px 0.6rem;
    }

    @media (max-width: 768px) {
        height: auto;
        width: 100%;
        color: black;
        padding: 10px 16px;
        background-color: white;
        border: 1px solid #1c1c1c0d;
        justify-content: center;
    }

`

export const Logo = styled(Link)`
    color: hsl(0, 0%, 100%);
    text-decoration: none;
    padding: 0px 16px;
    margin-right: 10px;
    width: calc(100% / 7);
    font-size: 1.2rem;
    border-radius: 4px;
    display: flex;
    align-items: center;

    :hover {
        color: #d2d2d2;
    }
    @media (max-width: 945px) {   
        width: max-content;
    }
`

export const StyledMenu = styled(Menu)`
    color: #fff;
    margin-right: 5px;
    z-index: 1;
    display: none;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: ${({open}) => open ? "none" : "inline"}
    }
`

export const StyledExit = styled(Exit)`
    color: #fff;
    margin-right: 5px;
    z-index: 1;
    display: none;

    :hover { 
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: ${({open}) => open ? "inline" : "none"}
    }
`

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    width: 90%;

    @media(max-width: 1050px){
        width: 100%
    }
`