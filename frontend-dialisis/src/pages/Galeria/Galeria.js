import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.css'
import {Carousel} from 'react-responsive-carousel';

import img1 from './img/boot.jpg'
import img2 from './img/boot4.png'
import img3 from './img/boot2.png'
import img4 from './img/boot3.jpg'

const Galeria = () => { 
    return (        
    <Carousel showArrows={true} >
      <div>
        <img src={img1}/>
        <h2 className="titulo">imagen 1</h2>
      </div>
      <div>
        <img src={img2}/>
        <h2 className="titulo">imagen 2</h2>
      </div>
      <div>
        <img src={img3}/>
        <h2 className="titulo">imagen 3</h2>
      </div>
      <div>
        <img src={img4}/>
        <h2 className="titulo">imagen 4</h2>
      </div>
    </Carousel>    
  );
}
export default Galeria
