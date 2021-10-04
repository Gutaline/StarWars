import React, { Component } from 'react'
import ItemList from '../item-list/ItemList';
import ItemDetails from '../item-details/ItemDetails';
import Row from '../Row/Row'

import SwapiService from '../../webRequest/index' 




export default class PlanetPage extends Component {
    swapiService = new SwapiService();
    
    state = {
        selectedPlanet: null,
        hasError: false
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id,
        })
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }
    
    render() {
        const itemList = (
            <ItemList 
             onItemSelected = {this.onPlanetSelected}
             getData = {this.swapiService.getAllPlanets}
            />
        );

        const itemDetails = (
            <ItemDetails
                itemId = {this.state.selectedPlanet}
                getData = {this.swapiService.getPlanet}
                getImage = {this.swapiService.getImagePlanets}
            /> 
        );
    
        return (
           <Row left = {itemList} right = {itemDetails}></Row> 
        )
    }
}



