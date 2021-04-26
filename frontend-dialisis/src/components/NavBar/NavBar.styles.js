import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as Menu } from '../../Images/menu.svg'
import { ReactComponent as Exit } from '../../Images/x.svg'

export const Nav = styled.nav`
    position: sticky;
    background-color: #2196f3;
    box-shadow: 0px 2px 10px hsl(0, 0%, 0%, 0.5);
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HorizontalNav = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 70px;
    width: 100%;
    justify-content: flex-end;

    @media (max-width: 854px) {
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

    @media (max-width: 854px) {
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
    /* background-color: ${(open => open ? '#f1f1f1' : '#333')}; */
    margin-right: 5px;
    z-index: 1;
    display: none;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 854px) {
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

    @media (max-width: 854px) {
        display: ${({open}) => open ? "inline" : "none"}
    }
`