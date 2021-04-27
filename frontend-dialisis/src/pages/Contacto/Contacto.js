import React,{ components } from 'react'
import { SForm, SDiv, STextArea, SInput, SButton, SLabel } from '../Contacto/Contacto.styles'
const Contacto = () => {
    return(      
        <>                 
            <SDiv>                        
                    <SForm>
                        <h1>Contacto</h1>                        
                        <SLabel htmlFor="nombre">Nombre</SLabel>
                        <SInput type="text" name="nombre" id="apellido"/>                    
                        <SLabel htmlFor="apellido">Apellido</SLabel>
                        <SInput type="text" name="apellido" id="apellido"/>
                        <SLabel htmlFor="correo">Correo</SLabel>
                        <SInput type="text" name="correo" id="correo"/>
                        <SLabel htmlFor="telefono"  >Telefono</SLabel>
                        <SInput type="text" name="telefono" id="telefono"/>
                        <SLabel htmlFor="comentario">Comentario</SLabel>
                        <STextArea name="comentario" id="comentario"></STextArea>
                        <SButton type="submit">Enviar</SButton>
                          
                    </SForm> 
             </SDiv>                                                                                     
        </>
    )
}

export default Contacto