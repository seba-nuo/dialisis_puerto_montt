
import React from 'react';
import { SForm, SDiv, STextArea, SInput, SButton } from '../Contacto/Contacto.styles';


const Contacto = () => {    
    return(      
        <>                
            <SDiv>                          
                    <SForm> 
                        <h1>Contacto</h1>                          
                        <SInput type="text"   placeholder="Nombre"  maxLength="20" /><br/>                                           
                        <SInput type="text"  id="apellido" placeholder="Apellido"  maxLength="20" /><br/>                        
                        <SInput type="email"  id="correo" placeholder="Correo" /><br/>                       
                        <SInput type="text"  id="telefono" placeholder="Telefono" pattern="[0-9]+" maxLength="8"/><br/>                       
                        <STextArea  type="number"id="comentario" placeholder="Cometario" ></STextArea><br/>
                        <SButton type="submit" value="enviar">Enviar</SButton>                    
                    </SForm>                   
             </SDiv>  
               
        </>
    )
}

export default Contacto