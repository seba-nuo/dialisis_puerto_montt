import React from 'react'; 
import images from '../../Images/images0.jpg'
import {Titulo,Cuerpo} from '../Inicio/Inicio.styles'


const Inicio = () => {

    
    return(
        
          
        <> 
    <div> <center>
    

    <br></br>
     <Titulo> Centro De Dialisis Puerto Montt</Titulo><br></br>

   <div> <img src={images}  alt='imagen 1'/> <div><br></br>

    <Cuerpo>
   El centro de Diálisis Puerto Montt (ubicada en Padre Harter con san Cristóbal) presta servicio de diálisis a 
   pacientes o personas que lo requieran. Este centro de tratamiento médico cuenta con un equipo capacitado para 
   realizar esta labor, con su respectivas herramientas, dispositivos e insumos médicos, para poder gestionar los 
   casos que llegan al centro de una manera óptima.   
   Para los pacientes que tienen inconveniente para poder llegar a ubicación donde se encuentra el centro médico, 
   ya sea por no contar con un medio de transporte particular u otro problema, el Centro de Diálisis Puerto Montt  
   trabaja con una empresa externa que les presta el servició de traslado, para que así puedan llevar a cabo el  
   tratamiento médico de una mejor manera.  
  
   </Cuerpo><br></br>

       <Titulo>Misión</Titulo>
    <Cuerpo>
    Centro de Diálisis, con largos años de experiencia que proporciona una terapia de sustitución renal 
    a pacientes con enfermedad renal crónica, garantizando una atención segura a través de la conformación de nuestro 
    equipo de salud, el cual posee valores y competencias técnicas que nos llevan a una atención de calidad y teniendo 
    como centro de la atención a nuestros usuarios.     
    Nuestros procesos asistenciales se rigen según las normas del Manual Estándar General de Acreditación para los Centros 
    de Diálisis.
    </Cuerpo><br></br>

      <Titulo>Visión</Titulo>
    <Cuerpo>
    Ser un Centro de Diálisis acreditado como entidad prestadora, reconocido por otorgar una prestación de hemodiálisis
    con altos estándares de calidad, eficiencia y seguridad, centrados en el paciente, en un ambiente de trabajo en equipo,
    con profesionalismo, calidez, confianza, respeto y de perfeccionamiento continuo.
    </Cuerpo><br></br>


         </div> 
   
   
   </div>
   
   
  
   </center></div>
        
        

       
        </>
 
                 
    )
    

           
}
export default Inicio


