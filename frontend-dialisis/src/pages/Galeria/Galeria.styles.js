import styled from "styled-components";

export const SDiv = styled.div`
    display:flex;
    justify-content: left;
    align-items:center;
    padding: 5px;
`;
export const Simg = styled.img`
    width:600px;
    height:300px;
    margin:auto;
    padding:50px;
`;

export const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`