import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: '54b3e1431662477fad0841f751f16c02'});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      input: "",
      imageUrl: "https://pbs.twimg.com/profile_images/1513517589338763264/eHZuAS68_400x400.jpg",
      box: {},
      route: "signin",
      isSignedIn: false,
    }
  }
  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    //console.log(clarifaiFace);
    return({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - (clarifaiFace.bottom_row * height),
      rightCol: width - (clarifaiFace.right_col * width),
    })
  }

  displayFaceBox = (box) =>{
    this.setState({box: box});
    console.log(box);
  }

  onSubmit = () =>{
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
        },
        function(err) {
          // there was an error
        }
    );
  }

  onRouteChange = (route) =>{
    if(route === "signout"){
      this.setState({isSignedIn: false})
    } else if (route === "home"){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render(){
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home'
        ? <div>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
          <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
        </div>
        :(this.state.route === 'signin'
        ? <Signin onRouteChange={this.onRouteChange} />
        : <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;