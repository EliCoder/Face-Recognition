import './ImageLink.css'

const ImpageLinkForm = ({onInputChange, onButtonSubmit}) => {
 return (
  <div>
   <p className="f4 mobile-text center"> 
   This magic Brain will detect faces in your pictures give it a try.
   </p>
   <div className="center">
    <div className=" form pa4 br3 shadow-5 center">
     <input onChange={onInputChange} className="f4 pa2 w-70 center" type="text" placeholder="Image Url" />
     <button onClick={onButtonSubmit}className=" w-30 grow f4 link dib ph3 pv2 dib white bg-light-purple" type="button">Detect</button>
    </div>
   </div>
  </div>
 )
}

export default ImpageLinkForm