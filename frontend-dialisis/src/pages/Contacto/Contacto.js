
import React,{useState} from 'react';
import { STextArea, SButton, SDiv, SForm, SInput} from './Contacto.styles';


const Contacto = () => {  
	const expresiones = {
	  	//usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		Nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    Apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    Telefono: /^\d{7,14}$/,// 7 a 14 numeros
		Comentario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	}
  const[datos, setDatos]= useState({
      nombre:'',
      apellido:'',
      correo:'',
      telefono:'',
      comentario:''
  })
  const valida = (events)=>{
      //console.log(events.target.value)
      setDatos({
          ...datos,
          [events.target.name] : events.target.value

      })
  }
    const enviarDatos= (event)=>{
      event.preventDefault();
      console.log(datos.nombre+''
                  + datos.apellido+''
                  +datos.contacto+''
                  +datos.telefono+''
                  +datos.comentario+'');
    }

  return(      
        <>                
            <SDiv>                          
                    <SForm className="row" onSubmit={enviarDatos}> 
                       <SDiv> <h1>Contacto</h1> </SDiv>
                        <SDiv>
                          
                        <SInput
                          placeholder="Nombre"
                          className="form-control"
                          type="text"
                          name="nombre"
                          onChange={valida}
                          />   
                        </SDiv>  
                         <SDiv>     
                        <SInput
                         placeholder="Apellido"
                         type="text"
                         name="apellido"
                         onChange={valida}
                        />
                        </SDiv>  
                          <SDiv>
                        <SInput
                          placeholder="Correo"
                          type="email"
                          name="correo"
                          onChange={valida}
                         /> 
                         </SDiv>                    
                       <SDiv>           
                        <SInput 
                        placeholder="Telefono"
                        type="text"
                        name="telefono"
                        expresiones={expresiones.Telefono}
                        onChange={valida}
                        />     
                        </SDiv>  
                        <SDiv>
                        <STextArea placeholder="Comentario" type="text" onChange={valida}></STextArea>  
                         </SDiv>
                         <SDiv>
                        <SButton>Enviar</SButton>            
                        </SDiv>
                        
                    </SForm>               
             </SDiv>  
               
        </>
    );
}
  

export default Contacto