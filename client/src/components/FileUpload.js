import '../assets/css/fileUpload.css'
import React from 'react'
import { FileUpload } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
// drag drop file component
const Image = ({url}) =>{
  const style = {
    maxWidth: '300px',
  }
  const divStyle = {
    display: 'flex', 
    alignItems: 'center',
    border: '1px solid lightgrey',
    borderRadius: '16px',
    marginTop: '5px',
    marginBottom: '5px',
    overflow: 'hidden',
  }
return <>
  <div style = { divStyle }>
    <img key = { 123 } style = { style } src = { url } />
  </div>
  </>
}
const ImageWraper = ({imageURL}) =>{
  return <>
    
      {
        [...imageURL].map( ( url  ) => <Image key = { 12345 } url = { url } />)
      }
  </>
}

function FileUploadComponent({ setCredential }) {
    // drag state
    const [ isEmpty, setEmpty] = React.useState(true);
    // ref
    const inputRef = React.useRef(null);
    const [img, setImage ] = React.useState([])    

    
    // triggers when file is selected with click
    const handleChange = function(e) {
      e.preventDefault();
      if( e.target.files || img ) {
        setEmpty( false )
      }
      let array = Array.from( e.target.files )
      for( let i = 0; i< e.target.files.length ; i++){
        let latestValue = array.pop()
        const url = window.URL.createObjectURL( latestValue )
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setCredential( ( prev ) => {
              prev.image.push( { data: reader.result} )
              return prev
            })
          })
        setImage( (prev) => ([...prev, url]) )
        reader.readAsDataURL( latestValue )
      }
      

    };
    
  // triggers the input when the button is clicked
    const onButtonClick = () => {
      inputRef.current.click();
    };
    
    return (<>
      <div style = {{ display: 'flex',padding: '16px', flexWrap: 'wrap', justifyContent: 'space-around', }} className = 'file-upload-wraper'>
        <ImageWraper imageURL = { img } />
        <form id="form-file-upload"onSubmit={(e) => e.preventDefault()} style = {{ width: '100%'}} className = { isEmpty ? 'no-file-uploaded' : 'file-uploaded'}>
          <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange}/>
          <label id="label-file-upload" htmlFor="input-file-upload" >
            <div>
              <p>Drag and drop your file here or</p>
              <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
            </div> 
          </label>
        </form>
      </div>
      
      
    </>
    );
  };

  export default FileUploadComponent