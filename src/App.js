import React, { Component } from 'react';
import Header from './components/common/header'
import Sidebar from './components/sidebar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div className='body'>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
