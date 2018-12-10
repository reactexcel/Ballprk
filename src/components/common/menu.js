import React, { Component } from 'react'
import '../../style/menu.css';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
          show: false
        };
    }
    render() {
        return (
            <ul className='menu'>
                <li>Posts</li>
                <li className='active' >Our Athletes</li>
                <li>Photos</li>
                <li>Videos</li>
                <li>Events</li>
            </ul>
        );
    }
}

export default Menu;