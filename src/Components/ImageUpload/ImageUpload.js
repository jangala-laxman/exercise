import React, {useCallback} from 'react';
import { useDropzone } from 'react-dropzone';
import CloseIcon from '@mui/icons-material/Close';
import './ImageUpload.css'
const ImageUpload = ({image, setImage, setImageUploaded}) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    console.log(reader.result)
    reader.readAsDataURL(file);
  }, [setImage]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });
  const removeImage = (e)=>{
    setImage(null)
  }
  return (
    <div className='upload'>
      <h2> Upload Files</h2>
      <div {...getRootProps()} style={dropzoneStyle}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select image</p>
      </div>
      <div>
        {image && (
          <>
            <img src={image} alt="Uploaded" style={imageStyle} width={200} height={200} />
            
            <div className='closeIcon'><CloseIcon onClick={removeImage}  /></div>
          </>
        )}
      </div>

      <div className='navigate'>
        <a href="/"><button className='back'>back</button></a>
        <button className='next'  onClick={()=>setImageUploaded(true)}>next</button>
      </div>
    </div>
    
  );
};

const dropzoneStyle = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign:'center',
  cursor: 'pointer',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '200px',
};

export default ImageUpload;
