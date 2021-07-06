import styled from "styled-components";

export const Fondo = styled.div`
background-image: url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
width:100%;
height: 80vh; 
object-fit: inherit;
box-shadow:inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
display: flex;
justify-content: center;
align-items: center;
`

export const TituloFondo = styled.h1`
color: white;
font-size: 80px;
font-style:italic;

@media (max-width: 768px) {
    font-size: 50px;
}
`

export const Titulo = styled.h1`
color: black;
font-style:italic;
margin-left: 20px;
`
export const Cuerpo = styled.p`
font-size: 20px;
margin-left: 20px;
margin-right: 20px;
line-height: 1.8rem;
`

export const Columna = styled.div`
display: flex;
flex-direction: column;
width: 90%;
justify-content: center;
`

export const ImgCentro = styled.img`
width: 100%;
max-width: 400px;
height: auto;
object-fit: cover;
`

export const CuerpoContainer = styled.div`
display: flex;
width: 90%;
margin: 20px auto;

@media (max-width: 768px) {
    flex-direction: column;
}
`