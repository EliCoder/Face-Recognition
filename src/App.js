import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImpageLinkForm from './components/ImpageLink/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import particalOptions from './Config/Configjson'  
import Clarifai, { FACE_DETECT_MODEL } from 'clarifai'

const app = new Clarifai.App({
  apiKey: '70b6533f0bea4497b843af914cb926de'

});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: '',
    };
  }
  
calculateFaceLocation = (data) => {

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
     .then(response => this.calculateFaceLocation(response))
      .catch(err => console.log(err))
  }

render() {
  return (
    <div>
      <Particles className='particals'
      params={particalOptions}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImpageLinkForm onButtonSubmit={this.onButtonSubmit} 
      onInputChange={this.onInputChange}/>
     <FaceRecognition imgUrl={this.state.imgUrl}/>
    </div>
  );
}
}


export default App