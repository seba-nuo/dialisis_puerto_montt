import React from 'react'
import {screen, render} from '@testing-library/react'
import {TestPaginaInicio} from '../src/pages/Inicio/Inicio'


describe('TestPaginaInicio', ()=> {
    it ('must diplay a title', ()=> {
        render(<TestPaginaInicio/>)
        expect(screen.queryAllByText(/product page/i)).toBeInTheDocument()

    })
})