import React from 'react';
// import Logo1 from '../../Images/logo1.jpeg'
import { FondoMision, FondoVision, Cuerpo, Titulo, Container } from '../Acerca/Acerca.styles'
// import {FondoAcerca} from '../../pages/Acerca/Acerca.styles'


const Acerca = () => {

    return (
        <Container>
            {/* <img src={Logo1} alt='logo 1' /> */}
                <FondoMision>
                    <Titulo>Misión</Titulo>
                    <Cuerpo>
                        Centro de Diálisis, con largos años de experiencia que proporciona una terapia de sustitución renal
                        a pacientes con enfermedad renal crónica, garantizando una atención segura a través de la conformación de nuestro
                        equipo de salud, el cual posee valores y competencias técnicas que nos llevan a una atención de calidad y teniendo
                        como centro de la atención a nuestros usuarios.
                        Nuestros procesos asistenciales se rigen según las normas del Manual Estándar General de Acreditación para los Centros
                        de Diálisis.
                    </Cuerpo>
                </FondoMision>
                
                <FondoVision>
                    <Titulo>Visión</Titulo>
                    <Cuerpo>
                        Ser un Centro de Diálisis acreditado como entidad prestadora, reconocido por otorgar una prestación de hemodiálisis
                        con altos estándares de calidad, eficiencia y seguridad, centrados en el paciente, en un ambiente de trabajo en equipo,
                        con profesionalismo, calidez, confianza, respeto y de perfeccionamiento continuo.

                    </Cuerpo>

                </FondoVision>
        </Container>
    )
}

export default Acerca