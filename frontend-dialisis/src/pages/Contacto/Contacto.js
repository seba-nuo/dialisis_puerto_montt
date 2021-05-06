
import React, { Component } from 'react';
import { SForm, SDiv, STextArea, SInput, SButton } from '../Contacto/Contacto.styles';

const Contacto = () => {  
 return(      
        <>                
            <SDiv>                          
                    <SForm onSubmit={this.submit}> 
                        <h1>Contacto</h1>                          
                        <SInput type="text" placeholder="Nombre"   /><br/>                                           
                        <SInput type="text" placeholder="Apellido"  /><br/>                        
                        <SInput type="email" placeholder="Correo"  /><br/>                       
                        <SInput type="text" placeholder="Telefono"   /><br/>                       
                        <STextArea type="text" placeholder="Cometario" ></STextArea><br/>
                        <SButton type="submit">Enviar</SButton><br/>                   
                    </SForm>                   
             </SDiv>  
               
        </>
    )
  }

export default Contacto