
//import React, { Fragment, useState } from 'react';
import { STextArea, SButton, SDiv, SForm, SInput} from './Contacto.styles';
import {useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

const Contacto = () => {  
    const { register, formState:{errors}, handleSubmit } = useForm();
    
    const onSubmit = values => {
      //validdacion form
      console.log(values);
    }
  return(                     
            <SDiv>                          
                    <SForm onSubmit={handleSubmit(onSubmit)}>  
                        <h1>Contacto</h1>                     
                        <SDiv>                        
                        <SInput 
                          name="nombre"                                          
                          {...register("nombre", {required: true, maxLength:20, pattern:/^[A-Za-z]+$/i })}
                          placeholder="Nombre"                                                
                         /> 
                        
                         <p> {errors.nombre?.type === 'required' && "se requiere nombre"}</p>
                         <p> {errors.nombre?.type === 'maxLength' && "no mas de 20 caracteres"}</p>
                         <p> {errors.nombre?.type === 'pattern' && "solo letras"}</p>
                         
                        </SDiv>  
                         <SDiv>     
                        <SInput                        
                         name="apellido"                        
                        
                         placeholder="Apellido"                     
                    />                 
                     </SDiv>  
                      <SDiv>
                        <SInput
                          placeholder="Correo"
                          type="email"
                          name="correo"                         
                          className="form-control my-2"
                      /> 
                          
                         </SDiv>                    
                       <SDiv>           
                        <SInput                                               
                        name="telefono"                   
                       className="form-control my-2"
                       placeholder="Telefono"
                    />  
                             
                        </SDiv>  
                        <SDiv>
                        <STextArea                                           
                        name="comentario"                       
                        placeholder="Comentario"  
                   
                    ></STextArea> 
                         
                         </SDiv>
                         <SDiv>
                        <SButton type="submit" className="btn btn-primary" >Enviar</SButton>            
                        </SDiv>
                        
                    </SForm>   
                          
             </SDiv>  
                
        
    );
}
  

export default Contacto