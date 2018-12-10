import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../action";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import banner from '../assets/png/banner.png';
import clubLogo from '../assets/png/icon1.png';
import ThumbsUp from '../assets/svg/thumbsup.svg';
import Share from '../assets/svg/share.svg';
import Search from '../assets/png/search.png';
import Mention from '../assets/png/mention.png';

import '../style/body.css';
import Menu from '../components/common/menu';

class OverView extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: 'diagram'
    };
  }
  componentDidMount(){
    this.props.getPlayerListRequest();
  }
  renderPlayerList = listData => {
    return listData.map( data => {
      return(
        <div className='player'>
              <div className='banner'>
                <img src={banner} className='banner'/>
                <button className='follow'>Follow</button>
                <img src={clubLogo} className='clubLogo' />
              </div>
              <div className='about'>
                <span className='name'>{data.Name}</span>
                <span className='sub'>{data.league} | {data.position}</span>
                <span className='sub'> {data.subtitle} </span>
              </div>
              <button className='message'>Message</button>
              <button className='book'>Book Session</button>
            </div>
    );
  })
  }
  render() {
    const { playerList } = this.props;
    return (
      <React.Fragment>
        <Menu />
        <div className='wrapper'>
          <div className='recommend-share-mention'>
            <button className='recommend'> <img src={ThumbsUp} /> Recommend</button>                
            <button className='share'> <img src={Share} />Share</button>
            <button className='mention'> <b>@</b>  Mention</button>
          </div>
          <div className='search'>
            <img src={Search} />
            <input type='text' placeholder='Search Athletes' />
          </div>
          <div className='playerList'>
            {playerList.length > 0 && this.renderPlayerList(playerList)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export function mapStateToProps(state) {
  return {
    playerList: state.info.playerList.data,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OverView)
);
