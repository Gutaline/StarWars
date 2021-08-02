import React from 'react'

function PokemonDescription({items}) {
   
    return (
        <div>
           <h1> {items.name}</h1>
           <img src={items.sprites.other.dream_world.front_default} alt="Pokemon" />
           <div>{items.types[0].type.name}</div>
        </div>
    )
}

export default PokemonDescription
