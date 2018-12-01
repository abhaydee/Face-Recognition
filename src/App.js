import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';


const particlesoptions = {
  particles: {

    number: {
      value: 220,
      density: {
        enable: true,
        value_area: 800
      }
    }

  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesoptions} />
        <Logo />
        <Navigation />
        <ImageLinkForm />
        <Rank />
      </div>
    );
  }
}

export default App;
