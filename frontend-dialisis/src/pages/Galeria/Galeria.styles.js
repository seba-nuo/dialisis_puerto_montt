import styled from "styled-components";


export const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const Img = styled.img `
    position: relative !important;
    padding: 20px;
    border-radius: 20px;
    background-position: center ;
    box-shadow: 0px 15px 20px 0 #2196f3 !important;
    background-size: cover !important;
`
export const H2 = styled.h1`
    display: flex;
   justify-content: center;
    bottom: 20px ;
    
    font-family: 'Russo One', sans-serif ;
    font-size: 20px !important;
    border-radius: 100px !important;
    background-color: #2196f3 !important;
`
export const SH1 = styled.h1`
    display:flex;
     justify-content: center;
    color: rgb(12, 10, 19);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color:#2196f3 ;
    border-radius: 100px ;
    color: white;
`
