import styled from "styled-components";


export const TituloP = styled.h1`
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
    }
`
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
    }

`
export const Foto = styled.img`
    width: 20%;
    margin: 0 15px;
    border-image: 50%;
`