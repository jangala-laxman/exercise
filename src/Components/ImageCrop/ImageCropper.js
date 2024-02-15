import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import './ImageCropper.css';
import getCroppedImage from '../getCroppedImage';
import Slider from '@mui/material/Slider'

const defaultCrop = { x: 0, y: 0 };

const ImageCropper = ({ image, setImage, setCropped }) => {
  const [crop, setCrop] = useState(defaultCrop);
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels)
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImage(
        image,
        croppedAreaPixels,
        rotation)
      console.log('croppedImage', croppedImage)
      setCroppedImage(croppedImage);
     
    } catch (err) {
      console.log(err)
    }
  }, [image, rotation, croppedAreaPixels])

  const onClose = () => {
    setCroppedImage(null)
  }
  const handleNext=()=>{
    setImage(croppedImage)
    setCropped(true)
  }



  return (
    <div className="container">
     
      {image && (
        <div className="cropper-container">
          <Cropper
            image={image}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            zoomSpeed={4}
            maxZoom={3}
            zoomWithScroll={true}
            showGrid={true}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onClose={onClose}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
          />
        </div>
      )}
      <div className='controls'>
        <label>Zoom</label>
        <Slider size="small"
          aria-label="zoom"
          value={zoom}
          min={0}
          step={0.01}
          max={4}
          valueLabelDisplay="auto"
          onChange={(e, zoom) => setZoom(zoom)} />
        <label>Rotate</label>
        <Slider size="small"
          aria-label="rotation"
          value={rotation}
          min={0}
          step={1}
          max={360}
          valueLabelDisplay="auto"
          onChange={(e, rotation) => setRotation(rotation)} />
      </div>
      <div className="cropped-image-container">
        <div>{croppedImage && (
          <img className="cropped-image" src={croppedImage} alt="cropped" width={200} height={200} />
        )}</div>
        <div>{croppedImage && <>
          <button onClick={onClose}>close</button>
          <button onClick={handleNext}>next</button>
        </>}</div>
      </div>
      <div className='navigate'>
        <a href="/upload"><button className='back'>back</button></a>
        <button onClick={showCroppedImage} className='show'>Show</button>
      </div>
    </div>
  );
};

export default ImageCropper;
