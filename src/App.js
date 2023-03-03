import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import { Component } from 'react';
//import Clarifai from 'clarifai';


/* const app = new Clarifai.App({
  apiKey: 'ce305882d8d3562123b8d51ea36689ac'
 }); */

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    /*     app.models
          .predict(
            {
              id: 'face-detection',
              name: 'face-detection',
              version: '6dc7e46bc9124c5c8824be4822abe105',
              type: 'visual-detector',
            }, this.state.input)
            .then(response => {
              console.log('hi', response);
            })
            .catch(err => console.log(err)); */
  }

  render() {

    return (
      <div className="App">
        <ParticlesBg color='#FFFFFF' type="cobweb" bg={true} num={200} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl ={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
