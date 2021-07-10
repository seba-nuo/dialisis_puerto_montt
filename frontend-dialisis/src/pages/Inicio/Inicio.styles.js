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
color: white;
margin: 15px auto;

@media(max-width: 1050px){
    font-size: x-large;
}

`
export const Cuerpo = styled.p`
position: Center;
font-size: 20px;
color: white;
margin-left: 20px;
margin-right: 20px;
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
export const Fondo1 = styled.div`
background:linear-gradient(165deg, #f5fffe 0, #e3fffb 8.33%, #cefff8 16.67%, #b5fff5 25%, #98fff3 33.33%, #73fdf2 41.67%, #3cf2f2 50%, #00e6f3 58.33%, #00dbf7 66.67%, #00d1fb 75%, #00c8ff 83.33%, #00beff 91.67%, #00b6ff 100%);
align-items: center;
background-color: burlywood;
border-radius: 5px;
box-shadow:inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
display: flex;
margin: 0 auto;
width: 60%;
flex-direction: column;
justify-content: space-between;
@media(max-width: 1050px){
        width: 90%
    }`

export const Fondo2 = styled.div`
background:linear-gradient(145deg, #ccf6ff 0, #8fd7ff 25%, #3cb5f2 50%, #0094e6 75%, #0075da 100%);
align-items: center;
background-color: burlywood;
border-radius: 5px;
box-shadow:inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
display: flex;
margin: 0 auto;
width: 60%;
flex-direction: column;
justify-content: space-between;
@media(max-width: 1050px){
        width: 90%
    }`
