import React from 'react'
import logoPokemon from '../assets/Logo.png'
import logoBall from '../assets/ball-1.png'

function Header() {
    return (
        <div className="header">
            <div className = "header-logo_ball"><img src={logoBall} alt="ball"/></div>
            <div className = "header-logo__pokeman"><img src={logoPokemon} alt="pokemon"/></div>
        </div>
    )
}

export default Header
