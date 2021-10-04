import React, { Component } from 'react';
import SwapiService from '../../webRequest/index'
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../Error/ErrorMessage';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();
  

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };
  
  

  render() {
   
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet">  
       
          <div className = "background">
            {errorMessage}
            {spinner}
            {content}
          </div>
        
      </div>
      
    );
  }
}

const PlanetView = ({planet}) => {
  
  const { id, name, population,
    rotationPeriod, diameter } = planet;
  return(
    <React.Fragment>
          <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt = "Какой то текст"/>
            <div className = "planet-details">
              <h4>{name}</h4>
              <ul >
                  <li >
                  <span>Population: </span>
                  <span>{population}</span>
                  </li>
                  <li >
                  <span >Rotation Period: </span>
                  <span>{rotationPeriod}</span>
                  </li>
                  <li >
                  <span >Diameter: </span>
                  <span>{diameter}</span>
                  </li>
              </ul>
            </div>
    </React.Fragment>
  ); 
} 