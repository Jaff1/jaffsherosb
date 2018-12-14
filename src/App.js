import React, { Component } from 'react';
import dcComics from './dc-comics.png';
import marvelComics from './marvel-comics.jpg';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to the Heros app!!</h1>
      <div className='container'>
        <div className='column'>
          <img src={dcComics} alt='DC comics Logo' />
        </div>
        <div className='column'>
          <img src={marvelComics} alt='Marvel comics Logo' />
        </div>
      </div>
    </div>)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Home/>
      </div>
    );
  }
}

export default App;
