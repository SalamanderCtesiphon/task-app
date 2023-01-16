import React, { Component } from 'react';
import Overview from './Overview';


class App extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <h1>Howdy!</h1>
        <Overview />
      </div>
    )
  }
  
}

export default App;
