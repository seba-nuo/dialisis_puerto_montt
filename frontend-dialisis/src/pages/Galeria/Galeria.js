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
    </Container>
    
  );
}
export default Galeria
