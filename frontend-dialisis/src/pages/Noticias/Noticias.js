import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'

const Noticias = () => {
    let { url } = useParams();

    const [noticias, setNoticias] = useState(
        {
            titulo: "cargando...",
            portada: "https://example.com",
            cuerpo: "cargando...",
            url: "cargando...",
        }
    )

    console.log(url)
    useEffect(() => {
    // query to a api endpoint with the id url. not implemented

        setNoticias({
            titulo: "noticia 1",
            cuerpo: `Velit in enim adipisicing incididunt. In commodo sunt velit ut duis consequat ad ipsum. Occaecat cupidatat deserunt laborum incididunt adipisicing dolore nisi labore. Esse veniam voluptate pariatur anim officia esse fugiat ullamco. Voluptate minim id eiusmod qui cupidatat nulla in veniam in ea amet esse aute. Eu officia ullamco dolor veniam consectetur officia veniam sit sunt elit.`,
            url: "1"
        })
    }, [])

    return (
        <>
        <h2>{noticias.titulo}</h2>
        <Markdown>
                {noticias.cuerpo}
        </Markdown>
        </>
    )
}

export default Noticias