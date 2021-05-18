import React from 'react';
import { STextArea, SButton, SDiv, SForm, SInput, PError} from './Contacto.styles';
import { useForm } from "react-hook-form";

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
                 <SInput name="nombre" placeholder="Nombre"                                           
                          {...register("nombre", {required: true, maxLength:20, pattern:/^[A-Za-z]+$/i })}/></SDiv>    
                         <PError> {errors.nombre?.type === 'required' && "Se requiere Nombre!"}
                          {errors.nombre?.type === 'maxLength' && "No mas de 20 caracteres"}
                          {errors.nombre?.type === 'pattern' && "Solo letras"}</PError>                       
               <SDiv>
                  <SInput name="apellido" placeholder="Apellido"  
                          {...register("apellido", {required: true, maxLength:20, pattern:/^[a-zA-ZÀ-ÿ\s]{1,40}$/})}/></SDiv>                                 
                          <PError> {errors.apellido?.type === 'required' && "Se requiere Apellido!"}
                          {errors.apellido?.type === 'maxLength' && "No mas de 20 caracteres"}
                          {errors.apellido?.type === 'pattern' && "Solo letras"}</PError>  
                               
               <SDiv>
                  <SInput placeholder="Correo electronico" name="correo" type="email"          
                          {...register("correo", {required: true, maxLength:20, pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} /></SDiv>   
                          <PError> {errors.correo?.type === 'required' && "Se requiere correo electronico!"}
                          {errors.correo?.type === 'maxLength' && "No mas de 20 caracteres"}
                          {errors.correo?.type === 'pattern' && "solo letras"}</PError>  

               <SDiv>
                  <SInput name="telefono"  placeholder="Telefono"                  
                         {...register("telefono", {required: true,maxLength:20 , pattern:/^\d{7,14}$/ })} /></SDiv>                                               
                         <PError> {errors.telefono?.type === 'required' && "Se requiere numero de telefono!"}  
                         {errors.telefono?.type === 'pattern' && "7 a 14 numeros"}</PError>

               <SDiv>
                  <STextArea  name="comentario" placeholder="Comentario" 
                         {...register("comentario", {required: true, maxLength:120, pattern:/^[A-Za-z]+$/i})}></STextArea></SDiv>                                          
                          <PError> {errors.correo?.type === 'required' && "Se requiere comentario"}
                          {errors.correo?.type === 'maxLength' && "No mas de 120 caracteres"}
                          {errors.correo?.type === 'pattern' && "solo letras"}</PError>  
                <SDiv>
                    <SButton type="submit" >Enviar</SButton></SDiv>                                   
        </SForm>                             
    </SDiv>                   
    );
}
  

export default Contacto