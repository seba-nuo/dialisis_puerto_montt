import styled from "styled-components";

export const Background = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2196f3;
`

export const Map = styled.div`
    
    iframe {
        width: 650px;
        height: 250px;
        margin: 7px;
        border: 0;

        @media (max-width: 600px) {   
        width: max-content;
        }
    }
`

export const Encuentranos = styled.p`
    font-weight: 500;
    color: white;

`