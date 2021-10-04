import React, { Component } from 'react';
import SwapiService from '../../webRequest/index' 
import Spinner from '../spinner/Spinner';
import ErrorButton from '../error-button/ErrorButton';
import S from './styles.module.css';
import yoda from '../../img/yoda.png'

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item:null,
    loading:false,
    image:null,
    test: null,
    isImage: false
  }

  componentDidMount() {
    this.updateItem();
  }

  createField = () => {
    const allFields = Object.entries(this.state.item)
    return allFields.map((item,index) => {
      if(item[0] === 'id') return null
      return(
        <li key = {index}>
          <span>{item[0]}:</span>
          <span>{item[1]}</span>
        </li>
      )
    })
   
  }



  componentDidUpdate(preProps) {
    if(this.props.itemId !== preProps.itemId) {
      this.updateItem();
    
    }
  }

  updateItem = () => {
    const {itemId,getData,getImage} = this.props;

    if(!itemId) {
      return
    }
    this.setState({loading:true})

    getData(itemId).then((item)=>{
      this.setState({item,
                     loading:false,
                     image:getImage(itemId),
                     isImage:true}
      )
     
    })
  }

   imageError = () => {
    this.setState({
      isImage:false
    })
  }

  checkImage = () => {

  }



  render() {

    if(this.state.loading) {
      return (
        <div className={S.item_details}>
          <Spinner/> 
        </div>
      )
    }

    if(!this.state.item) {
      return (
        <div className = {S.no_details}>
          <div>Select item from list</div>
          <div>
            <img src={yoda} alt="" />
          </div>
        </div>
       )
    }

   
    const {name} = this.state.item;
    const allFields = this.createField()
    
   
    return (
      <div className={S.item_details}>
        {this.state.isImage
          ? 
          <img className="item-image"
          src={this.state.image} alt= "Some text" onError = {this.imageError} />
          :
          <div>В базе нет картинки</div>
         }
        <div>
          <h4>{name}</h4>
          <ul>
            {allFields}
            <li><ErrorButton></ErrorButton></li>
          </ul>
         
        </div>
      </div>
    )
  }
}