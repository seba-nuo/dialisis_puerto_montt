import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { CardStyle, Container, DateStyle, DefaultMessage } from './ListadoNoticias.style'
// import Test from '../../Images/test.png'

const Noticias = () => {

    // el cuerpo será enviando por la api en markdown por lo que habrá que parsearlo

    const [noticias, setNoticias] = useState([
        {
            id: 1,
            titulo: "cargando...",
            cuerpo: "cargando...",
            fecha: "2021-05-01",
            url: "cargando...",
            published_at: "2021-05-03T03:44:5300Z",
            created_at: "2021-05-03T03:44:5300Z",
            updated_at: "2021-05-03T03:44:5300Z",
            portada: [
                {
                    name: "test.png",
                    url: "/uploads/test_625c40fc1d.png"
                }
            ]
        }
    ])

    useEffect(() => {
        // fetch api y refrescar noticias con setNoticias
        const start = async () => {
            try {
                const res = await fetch("http://200.74.10.95/noticias")
                let resJSON = await res.json()
                // react-markdown no soporta subrallado. ademas se confunde con un link
                resJSON.forEach(noticia => noticia.cuerpo = noticia.cuerpo.replace("<u>", "").replace("</u>", ""))
    
                setNoticias(resJSON)
            } catch (error) {
                console.log(error);
            }

        }
        start()
    }, [])

    if (noticias[0].titulo !== "cargando...") {
        return (
            <Container>
                <h1>Noticias</h1>
                {noticias.map(noticia =>
                    <CardNoticia
                        key={noticia.id}
                        id={noticia.id}
                        titulo={noticia.titulo}
                        portada={noticia.portada[0].url}
                        cuerpo={noticia.cuerpo}
                        url={noticia.url}
                        fecha={noticia.published_at}
                    />
                )}
            </Container>
        )
    }
    
    return (
        <Container>
            <DefaultMessage>No hay ninguna noticia por el momento</DefaultMessage>
        </Container>
    )
}

const CardNoticia = ({ id, titulo, portada, cuerpo, url, fecha }) => {

    const date = new Date(fecha).toLocaleDateString("es-ES")

    return (
        <CardStyle to={{
            pathname: "noticias/" + url,
            state: { id }
        }}>
            <img src={portada} alt="img" />
            <div>
                <h1>{titulo}</h1>
                <DateStyle>{date}</DateStyle>
                <Markdown
                    allowedElements={["p", "strong", "em"]}
                >
                    {cuerpo}
                </Markdown>
            </div>
        </CardStyle>
    )
}

export default Noticias
