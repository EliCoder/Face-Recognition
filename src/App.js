import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImpageLinkForm from './components/ImpageLink/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import Register from './components/Register/Register'
import particalOptions from './Config/Configjson'  
import Clarifai, { FACE_DETECT_MODEL } from 'clarifai'
import SignIn from './components/SignIn/SignIn'

const app = new Clarifai.App({
  apiKey: '70b6533f0bea4497b843af914cb926de'

});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignIn: false
    };
  }
  
calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const img = document.getElementById('inputImg');
  const width = Number(img.width);
  const height = Number(img.height)       ;
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: width - (clarifaiFace.bottom_row * width)

  }
}

displayFaceBox = (box) =>{
  this.setState({box: box}) 
}

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input});
    app.models
    .predict(
      FACE_DETECT_MODEL,
      this.state.input)
     .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
     .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignIn : false})
    }else if (route === 'home'){
      this.setState({isSignIn: true})
    }
    this.setState({route: route});
}

 render() {
   const { isSignIn, imgUrl, route, box } = this.state;
  return (
    <div>
      <Particles className='particals'
       params={particalOptions}/>
      <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange}/>
      {route === 'home'
     ?<div>
       <Logo />
       <Rank />
       <ImpageLinkForm onButtonSubmit={this.onButtonSubmit} 
       onInputChange={this.onInputChange}/>
       <FaceRecognition box={box}imgUrl={imgUrl}/>
      </div>
   : (
     route === 'signin'
     ? <SignIn onRouteChange={this.onRouteChange} />
     : <Register onRouteChange={this.onRouteChange} />
   )
    }
    </div>
  );
}
}


export default App