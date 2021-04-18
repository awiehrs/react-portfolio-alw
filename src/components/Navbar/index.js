import React, { Component } from 'react';
import { styles } from './style.css'
import { NavLink } from 'react-router-dom'


export default class Navbar extends Component {
    render () {
        return (
            <nav>
            <ul className={styles}>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink exact to='/about'>About Me</NavLink></li>
            </ul>
            </nav>
        )
    }
}
