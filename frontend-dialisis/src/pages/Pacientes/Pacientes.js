import React from 'react';
import foto1 from '../../Images/Dialisis-Peritoneal.jpg'
import foto2 from '../../Images/hemodialisis.jpg'
import {TituloP,Fondo1,Fondo2,Cuerpo,Foto} from '../Pacientes/Pacientes.styles'




const Pacientes = () => {
    return(
        <>
        <center><TituloP>Información Para Nuestros Pacientes</TituloP></center>
        <Fondo1><br></br>
            <Foto src={foto1} alt="" />
       <center> <TituloP>Diálisis perotineal</TituloP></center>
                    <Cuerpo>
                    Es otro sistema de diálisis, en el que la sangre no es filtrada por
                    una máquina, sino por la membrana peritoneal (membrana que contiene 
                    la vísceras en el abdomen). Para ello, el paciente tiene un catéter 
                    intraperitoneal y recambia, cuatro veces al día, dos litros de líquido,
                    llamado líquido de diálisis. El proceso demora entre 30 a 40 minutos cada
                    vez. Otra posibilidad es el recambio automático de líquido de diálisis,
                    efectuado por una máquina durante la noche, mientras la persona duerme. 
                    La ventaja de la diálisis peritoneal es que el paciente se realiza su propia 
                    diálisis y por lo tanto, puede tener mayor libertad para realizar sus actividades 
                    propias, guardando su independencia.
                    </Cuerpo>
       </Fondo1><br></br>

       <Fondo2><br></br>
       
            <Foto src={foto2} alt="" />
       <center> <TituloP>Hemodiálisis crónica en la clínica</TituloP></center>
                    <Cuerpo>
                    La diálisis es realizada en una unidad especialmente equipada para ello, con 
                    tecnología de punta y los mejores especialistas en esta área. El enfermo está0
                    constantemente atendido. El tratamiento se efectúa con una máquina. Su duración 
                    es de cuatro a cinco horas y se repite tres veces a la semana. Es muy bien tolerado.
                    </Cuerpo>
       </Fondo2><br></br>

        </>

    )
}

export default Pacientes