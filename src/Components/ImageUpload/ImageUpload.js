import React, {useCallback} from 'react';
import { useDropzone } from 'react-dropzone';
import CloseIcon from '@mui/icons-material/Close';
import './ImageUpload.css'
const ImageUpload = ({image, setImage, setImageUploaded, setgetStarted}) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    
    reader.readAsDataURL(file);
  }, [setImage]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });
  const removeImage = (e)=>{
    setImage(null)
  }
  return (
    <div className='upload'>
      <h2> Upload Files</h2>
      <div {...getRootProps()} className='dropzoneStyle'>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select image</p>
      </div>
      <div className='uploadedImage'>
        {image && (
          <>
            <img src={image} alt="Uploaded" className='imageStyle' width={200} height={200} />
            
            <div className='closeIcon'><CloseIcon onClick={removeImage}  /></div>
          </>
        )}
      </div>

      <div className='navigate'>
        <button className='back' onClick={()=>setgetStarted(false)}>back</button>
        <button className='next' onClick={()=>setImageUploaded(true)}>next</button>
      </div>
    </div>
    
  );
};


export default ImageUpload;
