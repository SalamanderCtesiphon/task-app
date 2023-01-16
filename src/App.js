import React, { Component } from 'react';
import MyComponent from './Mycomponent';


class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Your ass is old and smelly')
  }
 
  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
      </div>
    )
  }
  
}

export default App;
