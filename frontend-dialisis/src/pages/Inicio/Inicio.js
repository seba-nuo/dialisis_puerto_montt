import React from 'react'; 
import images from './../../assets/images'

const Inicio = () => {
    return(

        <> 
       
         <center><h2>Quienes Somos..</h2> 
         
        
         <p>
            <i> El centro de Diálisis Puerto Montt (ubicada en Padre Harter con san Cristóbal) presta servicio de diálisis a 
         pacientes o personas que lo requieran. Este centro de tratamiento médico cuenta con un equipo capacitado para 
         realizar esta labor, con su respectivas herramientas, dispositivos e insumos médicos, para poder gestionar los 
         casos que llegan al centro de una manera óptima.   
         Para los pacientes que tienen inconveniente para poder llegar a ubicación donde se encuentra el centro médico, 
         ya sea por no contar con un medio de transporte particular u otro problema, el Centro de Diálisis Puerto Montt  
          trabaja con una empresa externa que les presta el servició de traslado, para que así puedan llevar a cabo el  
        tratamiento médico de una mejor manera.  
        </i>
         </p>
       
         
         </center>
        

        <img scr={images.img0}  alt='imagen 1'/> 
        </>
 

    )

    
}

export default Inicio