import React, { Component } from 'react'
import '../style/sidebar.css';
import banner from '../assets/png/banner.png';
import clubLogo from '../assets/png/clubLogo.png';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
          show: false
        };
    }
    render() {
        return (
            <div className='sidebar'>
                <div className='banner'>
                    <img src={banner} className='club' alt='club' />
                    <button className='follow'>Follow</button>
                    <img src={clubLogo} className='clubLogo' alt='clubLogo' />
                </div>
                <div className='description'>
                    <span className='club-name'>NFL Canada</span>
                    <small>Canada</small>
                    <div className='stats'>
                        <div className='posts'>
                            <span>7 Mil</span>
                            <small>Posts</small>
                        </div>
                        <div className='followers'>
                            <span>17546</span>
                            <small>Followers</small>
                        </div>
                        <div className='following'>
                            <span>312</span>
                            <small>Following</small>
                        </div>
                    </div>
                    <button className='message'>Message</button>
                </div>
            </div>
        );
    }
}

export default Sidebar;