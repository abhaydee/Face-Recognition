import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
const app = new clarifai.App({
  apiKey: '33d9c64437f7450c909b123d2596dc82'
});

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
  constructor() {
    super();
    this.state = {
      input: '',
      ImageUrl: ''
    }

  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onButtonSubmit = () => {
    this.setState({ ImageUrl: this.state.input });
    app.models.predict(clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
        // do something with response
        console.log(response);
      },
      function (err) {
        // there was an error
      }
    );
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesoptions} />
        <Logo />
        <Navigation />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <Rank />
        <FaceRecognition ImageUrl={this.state.ImageUrl} />
      </div>
    );
  }
}

export default App;
