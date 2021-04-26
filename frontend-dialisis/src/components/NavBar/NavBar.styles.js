import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: sticky;
    height: 80px;
    background-color: hsl(212, 100%, 40%);
    box-shadow: 0px 2px 10px hsl(0, 0%, 0%, 0.5);
  
    border-bottom-style: solid;
    border-bottom-color: black;
    
`
export const NavLink = styled(Link)`
    color: hsl(0, 0%, 100%);
    text-decoration: none;
    padding: 0px 5px;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 4px;
    border-right: 1px solid white;
    :hover {
        background-color: hsl(218, 100%, 63%, 0.45);
       
    }
`