import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { CardStyle, Container } from './ListadoNoticias.style'

const Noticias = () => {

    // el cuerpo será enviando por la api en markdown por lo que habrá que parsearlo
    // 

    const [noticias, setNoticias] = useState([
        {
            titulo: "cargando...",
            cuerpo: "cargando...",
        }
    ])

    useEffect(() => {
        // fetch api y refrescar noticias con setNoticias
        setNoticias([{
            titulo: "noticia 1",
            cuerpo: `Deserunt velit fugiat laboris culpa officia laborum nostrud irure eiusmod velit ut pariatur. Ut reprehenderit ut consectetur proident aliqua proident pariatur Lorem ea culpa sint adipisicing officia. Ut aliqua commodo labore eiusmod consequat elit adipisicing labore veniam. Tempor ea laboris consequat pariatur sit Lorem esse non irure laborum. Veniam aliquip labore anim exercitation adipisicing sunt. Do ut non proident aliquip.`,
            slug: "1"
        },
        {
            titulo: "noticia 2",
            cuerpo: "Est proident sunt qui consectetur eiusmod eiusmod consectetur sunt veniam consectetur laborum. Dolor sint excepteur consequat laborum ex laborum ex adipisicing officia nisi ut. Fugiat adipisicing eiusmod minim nulla esse aliquip eu.",
            slug: "2"
        },
        {
            titulo: "noticia 3",
            cuerpo: "Duis ullamco cupidatat id Lorem amet sit. Dolor velit in excepteur eiusmod elit duis sit esse ut tempor. Tempor veniam tempor consectetur cillum deserunt. Excepteur eiusmod excepteur labore et velit consectetur anim incididunt non consectetur eu anim. Duis et nostrud officia enim nostrud minim fugiat dolor ipsum do aute. Mollit esse do tempor velit laborum tempor exercitation tempor elit eiusmod consequat incididunt.",
            slug: "3"
        },
        {
            titulo: "noticia 4",
            cuerpo: "Sit irure magna consequat incididunt laborum aliquip cupidatat cillum proident proident ipsum eiusmod excepteur quis. Veniam et aliquip consectetur reprehenderit aliquip ad eu exercitation. Lorem amet enim sint esse ex in laborum. Ipsum dolor dolor quis voluptate et. Qui labore dolore voluptate qui consequat. Ullamco officia do elit deserunt consectetur velit proident id.",
            slug: "4"
        },
        {
            titulo: "noticia 5",
            cuerpo: "Amet anim dolore ipsum magna veniam anim dolore pariatur. Aliquip est pariatur voluptate non mollit labore commodo culpa eu est velit ipsum. Sit elit ut nisi laboris aliqua deserunt. Id dolore officia excepteur duis quis consectetur pariatur labore dolore commodo. Ea Lorem ullamco irure aliqua. Ea laboris irure minim proident tempor mollit sunt duis non ut sunt pariatur laboris Lorem.",
            slug: "5"
        },
        ])
    }, [])

    return (
        <Container>
            <h1>Noticias</h1>
            {noticias.map(noticia =>
                <CardNoticia
                    key={noticia.slug}
                    titulo={noticia.titulo}
                    cuerpo={noticia.cuerpo}
                    slug={noticia.slug}
                />
            )}
        </Container>
    )
}

const CardNoticia = ({ titulo, cuerpo, slug }) => {
    return (
        <CardStyle to={"noticias/" + slug}>
            <h1>{titulo}</h1>
            <Markdown title={cuerpo} className="markdown">{cuerpo}</Markdown>
        </CardStyle>
    )
}

export default Noticias
