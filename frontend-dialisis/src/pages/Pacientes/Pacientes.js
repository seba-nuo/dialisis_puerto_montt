import React from 'react';
import foto1 from '../../Images/Dialisis-Peritoneal.jpg'
import foto2 from '../../Images/hemodialisis.jpg'
import { TituloP, Fondo1, Fondo2, Cuerpo, Foto } from '../Pacientes/Pacientes.styles'




const Pacientes = () => {
    return (
        <>}

            <br></br>
            <Fondo2> <center><TituloP>Insuficiencia Renal Cronica y sus Alternativas De Tratamiento </TituloP></center></Fondo2> <br></br>

            <Fondo1><br></br>
                <center> <TituloP>Las Causas De La Insuficiencia Renal Cronica</TituloP></center>
                <Cuerpo>
                    1. Problemas congénitos del riñón y vías urinarias.<br></br>
                    2. Procesos inflamatorios del riñón llamados glomerulonefritis.<br></br>
                    3. Daños renales debido a otras enfermedades como la diabetes, el lupus y la hipertensión.<br></br>
                    4. Trastornos hereditarios.<br></br>
                    5. Enfermedad renal debido a tóxicos.<br></br>
                    6. Problemas obstructivos por tumores o cálculos.<br></br>
                    7. Causa desconocida.<br></br>
                </Cuerpo>
            </Fondo1><br></br>

            <Fondo2><br></br>
                <center> <TituloP>Signos y Sintomas</TituloP></center>
                <Cuerpo>
                    Los síntomas son muy variados y pocas veces claros. Algunos usuarios no
                    muestran síntomas por mucho tiempo. Produce lesiones graves antes de que la
                    persona sospeche que está enferma. La mayoría son de índole general:
                    debilidad, irritabilidad, dolor de cabeza, orinar constantemente durante la
                    noche, mareos, náuseas, vómitos, picazón, el cuerpo se hincha, hay falta de
                    aire, pérdida del apetito, fatiga, lentitud y calambres.
                    Conforme avanza la enfermedad, la piel se vuelve de color terroso, seca y con
                    tendencia a descamarse, con manchas y moretes, aumento de la presión
                    arterial, aliento con olor a orina, dificultad para respirar, mucho sueño durante
                    el día y dificultad para dormir durante la noche.
                    Base del tratamiento de la insuficiencia renal crónica
                    El tratamiento de la insuficiencia renal crónica se conforma de: hemodiálisis,
                    restricciones dietéticas y tratamiento médico. El trasplante renal es el
                    tratamiento quirúrgico de la enfermedad.
                </Cuerpo>
            </Fondo2><br></br>

            <Fondo1><br></br>
                <center> <TituloP>Tratamientos Medicos</TituloP></center>
                <Cuerpo>
                    Existen razones por las que el usuario debe tomar medicamentos, una de ellas
                    es que durante la hemodiálisis, además de impurezas se pierden sustancias que
                    le son útiles al organismo, tales como vitaminas y minerales. Algunos de los más
                    usados son:<br></br>
                    <br></br>
                    1. Acido fólico: ayuda a madurar los glóbulos rojos.<br></br>
                    2. Sulfato ferroso: hierro.<br></br>
                    3. Hidróxido de aluminio: necesario para que no se absorba el fósforo en elintestino.<br></br>
                    4. Calcio: necesario para huesos y dientes.<br></br>
                    5. Calcitriol: es vitamina D, que permite usar mejor el calcio.<br></br>
                    6. Metoclopramida: alivia náuseas y vómitos.<br></br>
                    7. Atenolol, enalapril, nifedipina, prazosin: para bajar la presión arterial.<br></br>
                    <br></br>
                </Cuerpo>
            </Fondo1><br></br>





            <br></br>
            <Fondo2> <center><TituloP>Opciones De Tratamienos Para Nuestros Pacientes</TituloP></center></Fondo2> <br></br>
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