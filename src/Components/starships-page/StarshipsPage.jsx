import React, { Component } from 'react'
import ItemList from '../item-list/ItemList';
import ItemDetails from '../item-details/ItemDetails';
import Row from '../Row/Row'

import SwapiService from '../../webRequest/index' 


export default class StarshipsPage extends Component {
    swapiService = new SwapiService();
    
    state = {
        selectedShips: null,
        hasError: false
    }

    onShipsSelected = (id) => {
        this.setState({
            selectedShips: id,
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
             onItemSelected = {this.onShipsSelected}
             getData = {this.swapiService.getAllStarships}
            />
        );

        const shipsDetails = (
            <ItemDetails
                itemId = {this.state.selectedShips}
                getData = {this.swapiService.getStarship}
                getImage = {this.swapiService.getImageStarships}
            /> 
        );
    
        return (
           
              <Row left = {itemList} right = {shipsDetails}></Row> 
            
        )
    }
}



