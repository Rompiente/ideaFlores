import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
        <div className='d-flex'>

            <button className='NavBar__button'>Menú</button>
            <button className='NavBar__button'>Tienda</button>
            <button className='NavBar__button'>Sobre Nosotros</button>
            <button className='NavBar__button'>Preguntas Frecuentes</button>
            <CartWidget />
        </div>
    </>
    )
}

export default NavBar
