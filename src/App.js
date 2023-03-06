import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import { Component } from 'react';
import Clarifai from 'clarifai';


 /* const app = new Clarifai.App({
  apiKey: 'ce305882d8d3562123b8d51ea36689ac'
 }); */

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height)
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setStat ({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
      /* app.models
          .predict(
            {
              id: 'face-detection',
              name: 'face-detection',
              version: '6dc7e46bc9124c5c8824be4822abe105',
              type: 'visual-detector',
            }, this.state.input)
            .then(response => {
              console.log('hi', response);
              this.displayFaceBox(this.calculateFaceLocation(response));
            })
            .catch(err => console.log(err));  */
  }

  render() {

    return (
      <div className="App">
        <ParticlesBg color='#FFFFFF' type="cobweb" bg={true} num={200} />
        <Navigation />
        <Signin />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageUrl ={this.state.imageUrl} />

      </div>
    );
  }
}

export default App;
