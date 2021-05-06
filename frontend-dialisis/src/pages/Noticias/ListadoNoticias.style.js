import styled from "styled-components";
import { Link } from 'react-router-dom'

export const CardStyle = styled(Link)`
    display: flex;
    /* flex-direction: column; */
    width: 60%;
    background-color: #a6a6a64d;
    text-decoration: none;
    margin: 10px;
    align-items: center;
    border-radius: 5px;

    :hover {
        background-color: #8c8c8c94;
    }

    h1 {
        margin: 5px 10px;
    }

    img {
        max-width: 30%;
        height: auto;
        margin-left: 4px;
    }

    p {
        display: none;
    }

    p:first-of-type {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        margin: 5px 10px;
    }

    :active {
        padding: 5px;
    }

    @media (max-width: 768px) {   
        width: 90%;
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`