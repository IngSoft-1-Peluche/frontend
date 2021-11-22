import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Responder from './Responder';

test('Modulo renderiza correctamente cuando me toca responder la sospecha y tengo 2 cartas', async () => {
    //Parametros para el test
    const responder = true
    const sospecha_en_curso = true
    const sospecha = { "cartas_sospechadas": ["Panteon", "Dracula", "Conde"] }
    const cartasJu = ["Biblioteca", "Conde", "Alcoba", "Panteon", "Momia", "Laboratorio", "Bruja de Salem", "Fantasma", "Cochera"]

    const component = render(<Responder cartas={cartasJu} sospecha={sospecha} sospecha_en_curso={sospecha_en_curso} responder={responder} />)
    await component.findAllByText('Conde')
    await component.findAllByText('Panteon')
})

test('Modulo renderiza correctamente cuando no me toca responder la sospecha y tengo 2 cartas', async () => {
    //Parametros para el test
    const responder = false
    const sospecha_en_curso = true
    const sospecha = { "cartas_sospechadas": ["Panteon", "Dracula", "Conde"] }
    const cartasJu = ["Biblioteca", "Conde", "Alcoba", "Panteon", "Momia", "Laboratorio", "Bruja de Salem", "Fantasma", "Cochera"]

    const component = render(<Responder cartas={cartasJu} sospecha={sospecha} sospecha_en_curso={sospecha_en_curso} responder={responder} />)
    await component.findAllByText('El jugador sospecho lo siguiente:')
    await component.findAllByText('Conde')
    await component.findAllByText('Panteon')
    await component.findAllByText('Dracula')
    await component.findAllByText('Esperando la respuesta de')

})

test('Modulo renderiza correctamente cuando no me toca responder la sospecha', async () => {
    //Parametros para el test
    const responder = false
    const sospecha_en_curso = true
    const sospecha = { "cartas_sospechadas": ["Panteon", "Dracula", "Conde"] }
    const cartasJu = ["Biblioteca", "Conde", "Alcoba", "Panteon", "Momia", "Laboratorio", "Bruja de Salem", "Fantasma", "Cochera"]

    const component = render(<Responder cartas={cartasJu} sospecha={sospecha} sospecha_en_curso={sospecha_en_curso} responder={responder} />)
    await component.findAllByText('El jugador sospecho lo siguiente:')
    await component.findAllByText('Conde')
    await component.findAllByText('Panteon')
    await component.findAllByText('Dracula')
    await component.findAllByText('Esperando la respuesta de')

})

