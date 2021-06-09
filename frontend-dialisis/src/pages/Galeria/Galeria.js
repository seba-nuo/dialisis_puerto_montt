import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.css'
import { Carousel } from 'react-responsive-carousel';

import img1 from './img/boot.jpg'
import img2 from './img/boot4.png'
import img3 from './img/boot2.png'
import img4 from './img/boot3.jpg'

import { Container } from './Galeria.styles'

const Galeria = () => {
  return (
    <Container>
      <Carousel autoPlay>
        <div>
          <img alt="" src={img1} />
          <h2 className="legend">imagen 1</h2>
        </div>
        <div>
          <img alt="" src={img2} />
          <h2 className="legend">imagen 2</h2>
        </div>
        <div>
          <img alt="" src={img3} />
          <h2 className="legend">imagen 3</h2>
        </div>
        <div>
          <img alt="" src={img4} />
          <h2 className="legend">imagen 4</h2>
        </div>
      </Carousel>
    </Container>
  );
}
export default Galeria
