import styled from "styled-components";
import { Link } from 'react-router-dom'

export const CardStyle = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 60%;
    background-color: #a6a6a64d;
    text-decoration: none;
    margin: 10px;
    align-items: center;

    :hover {
        background-color: #8c8c8c94;
    }

    h1, .markdown {
        margin: 5px 10px;
    }
    .markdown {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
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