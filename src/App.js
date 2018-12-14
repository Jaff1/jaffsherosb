import React, { Component } from 'react';
import { BrowserRouter as Roter, Route } from 'react-router-dom'
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
    </div>
  )
}
function DCComics() {
  return (
    <div>
      <h1> This is the DC Comics page</h1>
    </div>
  )
}
function Marvel() {
  return (
    <div>
      <h1> This is the Marvel Comics page</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Roter>
        <div className="App">
          <Route excact path="/" component={Home} />
          <Route path="/dc-comics" component={DCComics} />
          <Route path="/marvel" component={Marvel} />
        </div>
      </Roter>
    );
  }
}

export default App;
