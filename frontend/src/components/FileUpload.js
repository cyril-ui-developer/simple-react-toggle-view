import React from 'react';
import { storage } from '../firebase/firebase';



const FileUpload = ({onGetFileUploadUrl})=> {
    const allInputs = {imgUrl: ''};
    const [imageAsFile, setImageAsFile] = React.useState('')
    const [imageAsUrl, setImageAsUrl] = React.useState(allInputs)

    console.log("imageAsFileimageAsFile", imageAsFile)
 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      console.log("image", image, e.target)
      setImageAsFile(imageFile => (image))
  }
  const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
  const handleFireBaseUpload = e => {
    e.preventDefault()
    console.log('start of upload')
    // async magic goes here...
  //  if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
  //  }
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    //initiates the firebase side uploading 
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageAsFile.name).getDownloadURL()
       .then(fireBaseUrl => {
         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
         onGetFileUploadUrl( fireBaseUrl)

       })
    })
  
  }
  console.log(`not an image, the image file is a ${typeof(imageAsFile)}`)
  console.log("imageAsFile)" , imageAsFile)
  
 // async magic goes here...
 if(imageAsFile === '' ) {
  console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
}

//onGetFileUploadUrl
// const getFileUploadUrl = ()=> {

// }

    console.log('url' , imageAsUrl)
  
  return (
    <div>
      <form onSubmit={handleFireBaseUpload}>
      <input 
   type="file"
   onChange={handleImageAsFile}
 />
  <button>upload to firebase</button>
</form>

<img src={imageAsUrl.imgUrl} alt="image tag" />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default FileUpload;