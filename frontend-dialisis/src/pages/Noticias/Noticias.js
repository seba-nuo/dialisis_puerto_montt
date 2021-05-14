import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Markdown from 'react-markdown'

const Noticias = () => {
    let { state } = useLocation();

    const [noticia, setNoticia] = useState(
        {
            titulo: "cargando...",
            portada: "https://example.com",
            cuerpo: "cargando...",
            url: "cargando...",
        }
    )

    useEffect(() => {
        // query to a api endpoint with the id url. not implemented
        const start = async () => {
            const res = await fetch(`http://localhost:1337/noticias/${state.id}`)
            const resJSON = await res.json()
            
            // react-markdown no soporta subrallado. ademas se confunde con un link
            resJSON.cuerpo = resJSON.cuerpo.replace("<u>", "").replace("</u>", "")

            setNoticia(resJSON)
        }
        start()
    }, [state.id])

    console.log(noticia.cuerpo);

    return (
        <>
            <h2>{noticia.titulo}</h2>
            <Markdown>
                {noticia.cuerpo}
            </Markdown>
        </>
    )
}

export default Noticias