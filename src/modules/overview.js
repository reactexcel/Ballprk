import React, { Component } from 'react';
import '../style/body.css';

class OverView extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: 'diagram'
    };
  }
  render() {
    return (
      <div className='row body-color'>
        <div className="container">
          <div className='row'>
            
          </div>
        </div>
      </div>
    );
  }
}

export default OverView;
