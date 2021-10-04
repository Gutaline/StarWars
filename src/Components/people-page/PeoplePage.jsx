import React, { Component } from 'react'
import ItemList from '../item-list/ItemList';
import ItemDetails from '../item-details/ItemDetails';
import Row from '../Row/Row'


import SwapiService from '../../webRequest/index' 



export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    
    state = {
        selectedPerson: null,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
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
             onItemSelected = {this.onPersonSelected}
             getData = {this.swapiService.getAllPeople}
            />
        );

        const personDetails = (
            <ItemDetails
                itemId = {this.state.selectedPerson}
                getData = {this.swapiService.getPerson}
                getImage = {this.swapiService.getImagePerson}
            /> 
        );
    
        return (
            <Row left = {itemList} right = {personDetails}></Row>
        )
    }
}



