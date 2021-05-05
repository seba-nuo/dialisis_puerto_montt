import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
// import gfm from 'remark-gfm'
import { CardStyle, Container } from './ListadoNoticias.style'
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
            const res = await fetch("http://localhost:1337/noticias")
            let resJSON = await res.json()

            // react-markdown no soporta subrallado. ademas se confunde con un link
            resJSON.forEach(noticia => noticia.cuerpo = noticia.cuerpo.replace("<u>", "").replace("</u>", ""))

            setNoticias(resJSON)
        }
        start()
    }, [])

    return (
        <Container>
            <h1>Noticias</h1>
            {noticias.map(noticia =>
                <CardNoticia
                    key={noticia.id}
                    titulo={noticia.titulo}
                    portada={noticia.portada[0]}
                    cuerpo={noticia.cuerpo}
                    url={noticia.url}
                />
            )}
        </Container>
    )
}

const CardNoticia = ({ titulo, portada, cuerpo, url }) => {
    return (
        <CardStyle to={"noticias/" + url}>
            <img src={portada} alt="img" />
            <div>
                <h1>{titulo}</h1>
                <Markdown 
                    allowedElements={["p"]}
                    >
                        {cuerpo}
                </Markdown>
            </div>
        </CardStyle>
    )
}

export default Noticias
