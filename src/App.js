import React, { Component } from 'react';
import { BrowserRouter as Roter, Route, Link } from 'react-router-dom'
import dcComics from './dc-comics.png';
import marvelComics from './marvel-comics.jpg';
import batman from './batman.png';
import robin from './robin.jpeg';
import wonderWoman from './wonder woman.jpeg';
import './App.css';

function DCComics() {
  return (
    <div>
      <h1> This is the DC Comics page</h1>
      <div className='container'>
        <Hero name='Batman' src={batman} powers='rich, strong, fast, sexy'/>
        <Hero name='Robin' src={robin} powers='green, mask, fast'/>
        <Hero name='Wonder Woman' src={wonderWoman} powers='fast, sexy, smart' />
      </div >
    </div >
  )
}

function Hero(props) {
  return (
    <div className='column' >
      <h1>{props.name}</h1>
      <h3>{props.powers}</h3>
      <img src={props.src} alt={props.name} />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Heros app!!</h1>
      <div className='container'>
        <Link to='/dc-comics' className='column'>
          <img src={dcComics} alt='DC comics Logo' />
        </Link>
        <Link to='/marvel' className='column'>
          <img src={marvelComics} alt='Marvel comics Logo' />
        </Link>
      </div>
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
          <Route exact path="/" component={Home} />
          <Route path="/dc-comics" component={DCComics} />
          <Route path="/marvel" component={Marvel} />
        </div>
      </Roter>
    );
  }
}

export default App;
