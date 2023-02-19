import '../assets/css/fileUpload.css'
import React from 'react'
// drag drop file component
const Image = ({url}) =>{
  const style = {
    width: '200px',
    height: 'auto'
  }
  return <>
    <img key = { 123 } style = { style } src = { url } />
  </>
}
const ImageWraper = ({imageURL}) =>{
  return <>
    
    <div style = {{ display: 'flex' }}>
      {
        [...imageURL].map( ( url  ) => <Image key = { 12345 } url = { url } />)
      }
    </div>
  </>
}

function DragDropFile({ wsObject}) {
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);
    const [img, setImage ] = React.useState([])    

    const sendMessage = (message) =>{
      wsObject.send(JSON.stringify(message))
      // console.log( wsObject )
      console.log( message )
  }
    
    // triggers when file is selected with click
    const handleChange = function(e) {
      e.preventDefault();
      console.log( e.target.files)
      let array = Array.from( e.target.files )
      for( let i = 0; i< e.target.files.length ; i++){
          const url = window.URL.createObjectURL( array.pop() )
          setImage( (prev) => ([...prev, url]) )
          console.log( ' i am inside ')
      }
      
      // sendMessage( {task: 'write', content: reader.result})

    };
    
  // triggers the input when the button is clicked
    const onButtonClick = () => {
      inputRef.current.click();
    };
    
    return (<>
      <ImageWraper imageURL = { img } />
      <form id="form-file-upload"onSubmit={(e) => e.preventDefault()} style = {{ position: 'relative'}}>
        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange}/>
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <div>
            <p>Drag and drop your file here or</p>
            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
          </div> 
        </label>
      </form>
      
      
    </>
    );
  };

  export default DragDropFile