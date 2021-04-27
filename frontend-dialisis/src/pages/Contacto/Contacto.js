import React,{ components } from 'react'

const Contacto = () => {
    return(      
        <>
            <div>
                <row>
                    <h1>Contacto</h1>   
                     <form >
                        <div >
                             <label className="nombre" >Nombre
                                <input type="text" name="nombre" id="nombre" className="form-control"/>
                                </label>
                           </div><div>
                                <label>Apellido
                                <input type="text" name="apellido" id="apellido" className="form-control"/>
                                </label>
                            </div><div>
                             <label className="correo">Correo
                             <input type="text" name="correo" id="correo" className="form-control"/>
                             </label>
                            </div><div>
                             <label>Telefono
                             <input type="text" name="telefono" id="telefono" className="form-control"/>
                             </label>
                            </div><div>            
                                <label text="comentario">Comentario </label><br/>
                                <textarea></textarea>
                               
                            </div><div>
                             <button>Enviar</button>
                            </div>
                    </form>                                                 
                 </row>
            </div>
        </>
    )
}

export default Contacto