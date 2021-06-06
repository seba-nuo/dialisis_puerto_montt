import React from 'react'; 
 import images from '../../Images/sede.jpg'
import {Titulo1,Titulo2,Cuerpo,Columna,Fondo} from '../Inicio/Inicio.styles'


const Inicio = () => {

  
  
  
    return(    
        <> 
        
    <div> <center>
    
    <Fondo>
    <br></br>
     <Titulo1> Centro Nefrológico Puerto Montt</Titulo1><br></br>
   </Fondo>
   <Columna>
   <Titulo2> Centro De Diálisis Puerto Montt</Titulo2>

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

   <Cuerpo>

   <img src={images}  alt='imagen 1'/>

   </Cuerpo>

   </Columna>
 

   {/* <Columna>
       <Titulo2>Misión</Titulo2>
    Centro de Diálisis, con largos años de experiencia que proporciona una terapia de sustitución renal 
    a pacientes con enfermedad renal crónica, garantizando una atención segura a través de la conformación de nuestro 
    equipo de salud, el cual posee valores y competencias técnicas que nos llevan a una atención de calidad y teniendo 
    como centro de la atención a nuestros usuarios.     
    Nuestros procesos asistenciales se rigen según las normas del Manual Estándar General de Acreditación para los Centros 
    de Diálisis.
   

      <Titulo2>Visión</Titulo2><br></br>
    Ser un Centro de Diálisis acreditado como entidad prestadora, reconocido por otorgar una prestación de hemodiálisis
    con altos estándares de calidad, eficiencia y seguridad, centrados en el paciente, en un ambiente de trabajo en equipo,
    con profesionalismo, calidez, confianza, respeto y de perfeccionamiento continuo.
    </Columna><br></br>
     */}

    


         {/* </div>  */}
      
   
   {/* </div> */}
   
   
  
   </center></div>
        
        

       
        </>
 
                 
    )
    

           
}
export default Inicio


