import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../action";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

import '../style/sidebar.css';
import banner from '../assets/png/banner.png';
import clubLogo from '../assets/png/clubLogo.png';
import Partner from '../assets/png/partner.png';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
          show: false
        };
    }
    componentDidMount(){
        this.props.getClubDataRequest()
    }
    render() {
        const { clubData } = this.props;
        return (
            <div className='sidebar'>
                <div className='banner'>
                    <img src={banner} className='club' alt='club' />
                    <button className='follow'>Follow</button>
                    <img src={clubLogo} className='clubLogo' alt='clubLogo' />
                </div>
                <div className='description'>
                    <span className='club-name'>{clubData.title && clubData.title}</span>
                    <small>{clubData.subTitle && clubData.subTitle}</small>
                    <div className='stats'>
                        <div className='posts'>
                            <span>{clubData.post && clubData.post}</span>
                            <small>Posts</small>
                        </div>
                        <div className='followers'>
                            <span>{clubData.follower && clubData.follower}</span>
                            <small>Followers</small>
                        </div>
                        <div className='following'>
                            <span>{clubData.followings && clubData.followings}</span>
                            <small>Following</small>
                        </div>
                    </div>
                    <button className='message'>Message</button>
                    <a href=''>{clubData.link && clubData.link}</a>
                    <div className='about'>
                        {clubData.description && clubData.description}
                    </div>   
                </div>
                <div className='partners'>
                    <img src={Partner} />
                </div>
            </div>
        );
    }
}

export function mapStateToProps(state) {
    return {
        clubData: state.info.clubData.data,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  }
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Sidebar)
  );