import React from 'react';
// import images from '../../Images/sede.jpg'
import { TituloFondo, Titulo, Cuerpo, Columna, Fondo, CuerpoContainer,Fondo1,Fondo2 } from '../Inicio/Inicio.styles'


const Inicio = () => {
    return (
        <>
            <Fondo>
                <TituloFondo> Centro Nefrológico Puerto Montt</TituloFondo>
            </Fondo>
            
            <CuerpoContainer>

            <Columna>
            <Fondo1> <Titulo> Centro De Diálisis Puerto Montt</Titulo></Fondo1><br></br>
            <Fondo2>
                <Cuerpo>
                    El centro de Diálisis Puerto Montt (ubicada en Padre Harter 458) presta servicio de diálisis a
                    pacientes o personas que lo requieran. Este centro de tratamiento médico cuenta con un equipo capacitado para
                    realizar esta labor, con su respectivas herramientas, dispositivos e insumos médicos, para poder gestionar los
                    casos que llegan al centro de una manera óptima.
                    Para los pacientes que tienen inconveniente para poder llegar a ubicación donde se encuentra el centro médico,
                    ya sea por no contar con un medio de transporte particular u otro problema, el Centro de Diálisis Puerto Montt
                    trabaja con una empresa externa que les presta el servició de traslado, para que así puedan llevar a cabo el
                    tratamiento médico de una mejor manera.
                </Cuerpo>
            </Fondo2>
            </Columna>
            </CuerpoContainer>
        </>
    )
}
export default Inicio


