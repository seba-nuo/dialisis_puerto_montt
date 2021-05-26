import React from "react";
import Carousel from 'react-gallery-carousel';
import {SDiv, Simg} from "./Galeria.styles";
import boot from "./img/boot.jpg";
import boot2 from "./img/boot2.png";
import boot3 from "./img/boot3.jpg";
// import boot4 from "./img/boot4.png";

const Galeria = () => {
  
    return (
         
        <SDiv>
    <Carousel plugins={[`arrows`]}>
        <SDiv>
      <Simg src={boot} />
      </SDiv>
      <SDiv>
      <Simg src={boot2} />
      </SDiv>
       <SDiv>
      <Simg src={boot3} />
      </SDiv>
    </Carousel>
  </SDiv>
     
  );
}

export default Galeria
