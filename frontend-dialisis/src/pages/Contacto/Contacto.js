import React,{ components } from 'react'
import { SForm, SDiv, STextArea, SInput, SButton } from '../Contacto/Contacto.styles'
const Contacto = () => {
    return(      
           <>                 
                         
                     <SForm>
                        <h1>Contacto</h1> 
                        <label htmlFor="nombre">Nombre</label>
                        <SInput type="text" name="nombre"/>
                        <label htmlFor="apellido">Apellido</label>
                        <SInput type="text" name="apellido"/>
                        <label htmlFor="correo">Correo</label>
                        <SInput type="text" name="correo"/>
                        <label htmlFor="telefono">Telefono</label>
                        <SInput type="text" name="telefono"/>
                        <label htmlFor="comentario">comentario</label>
                        <STextArea name="comentario"></STextArea>
                        <SButton type="submit">Enviar</SButton>
                    </SForm> 
                                                                                                     
        </>
    )
}

export default Contacto