import React,{ components } from 'react'
import { SForm, SDiv, STextArea, SInput, SButton, SLabel } from '../Contacto/Contacto.styles'
const Contacto = () => {
    return(      
        <>                
            <SDiv> 
                <row>                     
                    <SForm>
                        <h1>Contacto</h1>                        
                        <SLabel htmlFor="nombre">Nombre</SLabel>
                        <SInput type="text" name="nombre" id="apellido"/><br/>                    
                        <SLabel htmlFor="apellido">Apellido</SLabel>
                        <SInput type="text" name="apellido" id="apellido"/><br/>
                        <SLabel htmlFor="correo">Correo</SLabel>
                        <SInput type="text" name="correo" id="correo"/><br/>
                        <SLabel htmlFor="telefono"  >Telefono</SLabel>
                        <SInput type="text" name="telefono" id="telefono"/><br/>
                        <SLabel htmlFor="comentario">Comentario</SLabel>
                        <STextArea name="comentario" id="comentario"></STextArea><br/>
                        <SButton type="submit">Enviar</SButton>                     
                    </SForm>
                </row>   
             </SDiv>     
                                                                                             
        </>
    )
}

export default Contacto