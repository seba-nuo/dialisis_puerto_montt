import React from 'react'; 
import {Titulo2} from '../../pages/Acerca/Acerca.styles'
import Logo1 from '../../Images/logo1.jpeg'
import{Fondo1,Fondo2,Cuerpo,Columna} from '../Acerca/Acerca.styles'
// import {FondoAcerca} from '../../pages/Acerca/Acerca.styles'


const Acerca = () => {


    return(
        <>
    
        

       <center>
           <img src={Logo1}  alt='logo 1'/>
       </center>
       <Columna>
       <Fondo1>
       <center> <Titulo2>Misión</Titulo2></center>
                    <Cuerpo>
                        Centro de Diálisis, con largos años de experiencia que proporciona una terapia de sustitución renal
                        a pacientes con enfermedad renal crónica, garantizando una atención segura a través de la conformación de nuestro
                        equipo de salud, el cual posee valores y competencias técnicas que nos llevan a una atención de calidad y teniendo
                        como centro de la atención a nuestros usuarios.
                        Nuestros procesos asistenciales se rigen según las normas del Manual Estándar General de Acreditación para los Centros
                        de Diálisis.
                    </Cuerpo>
       </Fondo1>
      

        <Fondo2>
        <center> <Titulo2>Visión</Titulo2></center>
                    <Cuerpo>
                        Ser un Centro de Diálisis acreditado como entidad prestadora, reconocido por otorgar una prestación de hemodiálisis
                        con altos estándares de calidad, eficiencia y seguridad, centrados en el paciente, en un ambiente de trabajo en equipo,
                        con profesionalismo, calidez, confianza, respeto y de perfeccionamiento continuo.

                    </Cuerpo>

        </Fondo2>
        </Columna>
      
   
        
        </>
        
    )
}

export default Acerca