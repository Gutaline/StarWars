import React, { Component } from 'react'
import S from './styles.module.css'

import RandomPlanet from '../random-planet/RandomPlanet';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Header from '../header/Header';
import PeoplePage from '../people-page/PeoplePage';
import PlanetPage from '../planets-page/PlanetPage';
import StarshipsPage from '../starships-page/StarshipsPage';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome/Welcome';

import ErrorMessage from '../Error/ErrorMessage'

export default class App extends Component {
  state = {
      hasError: false,
  }
  componentDidCatch() {
      this.setState({hasError: true})
  }


  render() {
      if(this.state.hasError){
          return <ErrorMessage/>
      }
      return (
          <div className ={S.app}>
              <BrowserRouter>
                  <Header></Header>
                  <RandomPlanet></RandomPlanet>
             <div className = {S.gg}>
              <Switch>
                  <Route exact path="/people" component = {PeoplePage} />
                  <Route exact path="/planets" component = {PlanetPage} />
                  <Route exact path="/starships" component = {StarshipsPage} />
                  <Route exact path="/" component = {Welcome}/>
                  <Route render = {() => (<h2 className = {S.notFound}>Page not found</h2>)}/>
              </Switch>
              </div>

                  <Footer></Footer>
              </BrowserRouter>
          </div>
          
      )
  }
}

