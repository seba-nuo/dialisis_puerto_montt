import React from 'react'
import {Div, Div1, SP} from './Map.styles'
const Map = () => {
    return (
    <Div>
     <center><SP>Ubicación:</SP></center>
        <Div1 >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.7851000980463!2d-72.94498648419011!3d-41.46557607925709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183a5599ace387%3A0x7361185236b52adb!2sPadre%20Harter%20458%2C%20Puerto%20Montt%2C%20Los%20Lagos!5e0!3m2!1sen!2scl!4v1620269878401!5m2!1sen!2scl" width="600" height="250" style={{border: "0"}} allowFullScreen="" loading="lazy" title="Mapa Centro de Diálisis Puerto Montt"></iframe>
        </Div1>
        
    </Div>
    )
}

export default Map