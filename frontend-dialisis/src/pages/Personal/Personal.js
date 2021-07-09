import React from 'react';
import andrea_mancilla from '../../Images/andrea-mancilla.jpg'
import hermes_llorens from '../../Images/hermes_llorens.jpg'
import miguel_nunez from '../../Images/miguel_nunez.jpg'
// import avatar from '../../Images/avatar.jpg'
import avatar_woman from '../../Images/avatar-woman.jpg'

import { Container, Titulo, Ficha, ImgFicha, TextoFicha } from './Personal.styles'

const Personal = () => {
    return (
        <Container>
            <Titulo>Conoce a nuestro personal</Titulo>
            <Ficha>
                <ImgFicha src={miguel_nunez} alt="" />

                <TextoFicha>
                    <h2>Miguel Núñez Carrera</h2>
                    <p className="profesion">Director Médico</p>

                    <p>Médico Cirujano, título otorgado por la Universidad Austral de Chile.
                        Especialidad, Medicina Interna
                        Subespecialidad, Medicina Intensiva / Nefrología Adulto.
                    </p>
                    <p>Registro Superintendencia de Salud: 81205</p>
                </TextoFicha>

            </Ficha>
            <Ficha>
                <ImgFicha src={hermes_llorens} alt="" />

                <TextoFicha>
                    <h2>Hermes Llorens Guerrero</h2>
                    <p className="profesion">Subdirector de Operaciones</p>

                    <p>Enfermero egresado de la Universidad de Chile
                        Especializado en Hemodiálisis desde el año 1990.
                        Registro Superintendencia de Salud.
                    </p>
                </TextoFicha>

            </Ficha>
            <Ficha>
                <ImgFicha src={andrea_mancilla} alt="" />

                <TextoFicha>
                    <h2>Andrea Mancilla Gallardo</h2>
                    <p className="profesion">Enfermera Coordinadora</p>

                    <p>Enfermera egresada de la Universidad Austral de Chile en el año 1998.</p>
                    <p>
                        Especializada en Hemodiálisis desde Octubre 2004, y desde el año 2014 asume el cargo de Enfermera Coordinadora del Centro Nefrológico Puerto Montt.
                    </p>
                    <p>
                        Diplomada en Bases teóricas de Hemodiálisis Crónica, otorgado por la Universidad de Chile.
                    </p>
                    <p>
                        Diplomada en Prevención y Control de Infecciones Asociadas a la Atención en Salud, otorgado por la Universidad Católica de Chile.
                    </p>
                    <p>
                        Diplomado en Gestión de Calidad en Salud, otorgado por Instituto Gecasep.
                    </p>

                </TextoFicha>
            </Ficha>
            <Ficha>
                <ImgFicha src={avatar_woman} alt="" />

                <TextoFicha>
                    <h2>Valeria Gómez Marceli</h2>
                    <p className="profesion">Enfermera Asesora de Calidad y Seguridad del Paciente</p>
                    <p>

                    </p>
                </TextoFicha>
            </Ficha>
            <Ficha>
                <ImgFicha src={avatar_woman} alt="" />

                <TextoFicha>
                    <h2>Paulina Ruiz Cordero</h2>
                    <p className="profesion">EU. de Calidad y Seguridad del Paciente</p>
                    <p>
                        Enfermera egresada de la Universidad Santo Tomás, Sede Concepción en el año 2012.
                    </p>
                    <p>
                        Especializada en Hemodiálisis desde Marzo 2013, y desde el año 2017 asume el cargo de Enfermera de Calidad y Seguridad del Centro Nefrológico Puerto Montt.
                    </p>
                    <p>
                        Diplomada de Calidad Asistencial y Seguridad del Paciente, Universidad San Sebastián.
                    </p>
                    <p>
                        Formación en el curso de Evaluadores del Sistema Nacional de Acreditación de Prestadores Institucionales de Salud, Universidad Católica de Chile.
                    </p>
                    <p>
                        Diplomado Herramientas de Prevención de IAAS para Profesionales, otorgado por Red Learning.
                    </p>
                    <p>
                        Diplomado “Urgencias, emergencias y desastres”, PUC.
                    </p>
                </TextoFicha>

            </Ficha>

        </Container>
    )
}

export default Personal