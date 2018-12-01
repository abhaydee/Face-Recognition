import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Navigation />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
