import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='inner-container'>
          <button
            className='left-btn'
            onClick={() => this.setState({
              counter: (this.state.counter - 1)
            })}
          >-</button>
          
          <p>{this.state.counter}</p>
          
          <button
            className='right-btn'
            onClick={() => this.setState({
              counter: (this.state.counter + 1)
            })}
          >+</button>
        </div>
      </div>
    );
  }
}

export default App;
