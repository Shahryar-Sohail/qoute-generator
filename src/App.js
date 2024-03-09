import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    advice: ''
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice })
      })
      .catch((error) => {
        console.log(error);
      })
  }
 
  combinefunction = () =>{
    console.log("hello");
    this.fetchAdvice();
  }


  render() {
    const { advice } = this.state;
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.combinefunction}>
            <span>Give Another Advice</span>
          </button>
        </div>

      </div>
    )
  }
}



export default App;