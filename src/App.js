import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank.js';
import Signin from './components/Signin/signin';
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
      ImageUrl: '',
      box: {},
    }

  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  CalculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

  }
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  }
  onButtonSubmit = () => {
    this.setState({ ImageUrl: this.state.input });
    app.models.predict(clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        // do something with response
        this.displayFaceBox(this.CalculateFaceLocation(response))
      })
      .catch(err => console.log(err));


  }
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesoptions} />
        <Logo />
        <Signin />
        <Navigation />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <Rank />
        <FaceRecognition box={this.state.box} ImageUrl={this.state.ImageUrl} />
      </div>
    );
  }
}

export default App;
