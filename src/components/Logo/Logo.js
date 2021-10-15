import Tilt from 'react-tilt'
import'./Logo.css'
import brain from './brain.png'

const Logo = () => {
 return (
  <div className="ma4 mt0 ">
   <Tilt className="Tilt br3 shadow-2" options={{ max : 55}} style={{ height: 120, width: 120 }} >
    <div className="Tilt-inner pa3">
      <img style={{paddingTop: '5px'}}
      src={brain} 
      alt="logo"/>
    </div>
   </Tilt>
  </div>
 )
}

export default Logo