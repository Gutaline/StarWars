import React, { Component } from 'react';
import S from './styles.module.css'
import Spinner from '../spinner/Spinner';



export default class ItemList extends Component {

  state = {
    itemList: null,
  }

  componentDidMount() {
    const {getData} = this.props;
    getData()
    .then( (itemList) => {
      this.setState({
        itemList
      });
    });
  }

  renderItems(arr) {
      return arr.map(({id, name}) => {
        return (<li
        key = {id}
        onClick = { () => this.props.onItemSelected(id)}
        >{name}</li>)
      })
  }

  render() {
    const {itemList} = this.state
    
    if(!itemList) {
      return( 
      <ul className = {S.ItemList}>
        <Spinner/>
       </ul>
       )
    }
      
    
    return (
        <ul className = {S.ItemList}>
          {this.renderItems(itemList)}
        </ul>
    );
  }
}