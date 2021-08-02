import React from 'react'

function PokemonCart({id,name,image,type,onClickCart}) {
    return (
        <button onClick = {onClickCart} className = "pokemon-cart">
            <div className = "pokemon-cart__number"><span>№{id}</span></div>
            <div  className = "pokemon-cart__img"><img src={image} alt="pokemon" /></div>
            <div className = "pokemon-cart__description">
                <strong> {name}</strong>
                <span>Class: {type}</span>
            </div>
        </button>
    )
}

export default PokemonCart
