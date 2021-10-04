import React, { Component } from 'react'
import S from './style.module.css';

import {NavLink} from 'react-router-dom'



export default class Header extends Component {
    render() {
        return (
            
            <div className = {S.header + " " + S.flex}>
                <h3>
                    <a href="/starwars/">
                    Home
                    </a>
                </h3>
               
                <ul  className={S.flex}>
                    <li>
                    <NavLink to="/people">People</NavLink>
                    </li>
                    <li>
                    <NavLink to="/planets">Planets</NavLink>
                    </li>
                    <li>
                    <NavLink to="/starships">Starships</NavLink>
                    </li>
                </ul>
                
             </div>
             
        )
    }
}
