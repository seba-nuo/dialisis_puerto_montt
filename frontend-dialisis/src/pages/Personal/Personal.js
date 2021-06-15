import React from 'react';
import avatar from '../../Images/avatar.jpg'
import { Container, Titulo, Ficha, ImgFicha } from './Personal.styles'

const Personal = () => {
    return (
        <Container>
            <Titulo>Conoce a nuestro personal</Titulo>
            <Ficha>
                <ImgFicha src={avatar} alt="" />

                <div>
                    <h2>John Doe</h2>

                    <p>Veniam velit sint fugiat commodo do dolor est. Ad eiusmod consectetur culpa esse eiusmod ad sint tempor nostrud. Lorem consequat irure amet veniam voluptate labore aliquip ex. Tempor consequat adipisicing consectetur consectetur nulla fugiat nulla. Ex ex ut voluptate irure sunt deserunt mollit cillum aute Lorem laboris. Consectetur eiusmod dolore aliqua cupidatat quis cupidatat.</p>
                </div>

            </Ficha>
            <Ficha>
                <ImgFicha src={avatar} alt="" />

                <div>
                    <h2>John Roe</h2>

                    <p>Veniam velit sint fugiat commodo do dolor est. Ad eiusmod consectetur culpa esse eiusmod ad sint tempor nostrud. Lorem consequat irure amet veniam voluptate labore aliquip ex. Tempor consequat adipisicing consectetur consectetur nulla fugiat nulla. Ex ex ut voluptate irure sunt deserunt mollit cillum aute Lorem laboris. Consectetur eiusmod dolore aliqua cupidatat quis cupidatat.</p>
                </div>

            </Ficha>
        </Container>
    )
}

export default Personal