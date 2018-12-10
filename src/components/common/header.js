import React, { Component } from 'react'
import '../../style/header.css';
import barcode from '../../assets/svg/barcode-product.svg';
import search from '../../assets/svg/search.svg';
import bell from '../../assets/svg/bell.svg';
import inbox from '../../assets/svg/inbox.svg';
import user from '../../assets/svg/boy.svg';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
          show: false
        };
    }
    render() {
        return (
            <header className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        BALLPRK
                    </a>
                    <div className="collapse navbar-collapse" id="menu">
                        <img src={search} alt='search' className='search' />
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="#">NEWSFEED</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">EXPLORE</a></li>
                        </ul>
                        <img src={barcode} alt='barcode' className='barcode' />
                        <span className='pipe'>&#124;</span>
                        <img src={inbox} alt='inbox' className='inbox' />
                        <img src={bell} alt='bell' className='bell' />
                        <div class={this.state.show ? "dropdown show" : "dropdown"}>

                        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" onClick={e => this.setState({ show: !this.state.show })} >
                            <img src={user} alt='user' className='user' />
                        </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;