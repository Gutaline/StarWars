import { useEffect, useState } from 'react';
import { Header, PokemonCart, PokemonDescription } from '../components';

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [description, setDescription] = useState(false);
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon, index) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        allPokemons.push(data);
      });
    }

    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      <div className="container">
        <Header />
        <div className="pokemon-container">
          <div className="pokemon-category">
            <h1>Favorietes</h1>
            <h2>Category 1</h2>
            <h2>Category 2</h2>
          </div>
          <div className="pokemon-catalog">
            {allPokemons.map((pokemon, index) => (
              <PokemonCart
                onClickCart={() => {
                  setDescription(true);
                  setDescriptionIndex(index);
                  console.log(index);
                }}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
            ))}
          </div>
          <div className="pokemon-description">
            {description && <PokemonDescription items={allPokemons[descriptionIndex]} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
