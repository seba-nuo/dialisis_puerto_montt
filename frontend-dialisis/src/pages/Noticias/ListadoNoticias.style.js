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
    max-height: 150px;
    max-width: 950px;

    :hover {
        background-color: #8c8c8c94;
        padding: 10px;
    }

    h1 {
        margin: 5px 10px;
        width: 100%;
    }

    img {
        height: auto;
        margin-left: 4px;
        height: 150px;
        width: 20%;
    }

    p {
        display: none;
    }

    span {
        justify-content: end;
        font-size: 18px;
        font-weight: 300;
    }

    p:first-of-type {
        display: -webkit-box;
        -webkit-line-clamp: 4;
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

export const DateStyle = styled.time`
    margin-left: 10px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`

export const DefaultMessage = styled.h1`
    font-weight: 700;

`