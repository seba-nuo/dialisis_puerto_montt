import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.css'
import { Carousel } from 'react-responsive-carousel';

import img1 from './img/dialisis.jpg'
import img2 from './img/dialysis-fig_3.png'
import img3 from './img/ff.jpg'
import img4 from './img/renal.png'

import { Container, SH1, Img, H2} from './Galeria.styles'

const Galeria = () => {
  return (
    
    <Container>
       <SH1> GALERIA </SH1>
      <Carousel autoPlay>
     
        <div>
          <Img alt="" src={img1} />
          <H2 className="legend">imagen 1</H2>
        </div>
        <div>
          <Img alt="" src={img2} />
          <H2 className="legend">imagen 2</H2>
        </div>
        <div>
          <Img alt="" src={img3} />
          <H2 className="legend">imagen 3</H2>
        </div>
        <div>
          <Img alt="" src={img4} />
          <H2 className="legend">imagen 4</H2>
        </div>
        
      </Carousel>
      <h3>¿Qué es Lorem Ipsum?</h3>
    
      <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
      archivos de texto. 
      Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, 
      como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
    </Container>
    
  );
}
export default Galeria
