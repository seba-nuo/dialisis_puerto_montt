import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: sticky;
    height: 80px;
    background-color: #2e7bc3;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 0px 5px;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    :hover {
        color: #61dafb
    }
    :active {
        background-color: #6b6b6b
    }
`