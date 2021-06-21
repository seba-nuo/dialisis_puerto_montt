import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 60%;
    flex-direction: column;
    justify-content: space-between;
    

    @media(max-width: 1050px){
        width: 90%
    }
`

export const Titulo = styled.h1`
    margin: 15px auto; 
    color: #2196f3;
    letter-spacing: 2px; 


    @media(max-width: 768px){
        font-size: large;
    }
`

export const Ficha = styled.div`
    display: flex;
    align-items: center;
    background-color: burlywood;
    margin-bottom: 20px;
    border-radius: 5px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ImgFicha = styled.img`
    width: 20%;
    margin: 0 15px;
    border-radius: 50%;
`

export const TextoFicha = styled.div`
    margin: 10px;
    text-align: center;
    line-height: 1.6;
`