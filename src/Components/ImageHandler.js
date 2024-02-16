import React, { useState } from "react";
import ImageUpload from "./ImageUpload/ImageUpload";
import ImageCropper from "./ImageCrop/ImageCropper";
import Canvas from "./Canvas/Canvas";
const ImageHandler = ({image, setImage, setgetStarted}) => {
    const [imageUploaded, setImageUploaded] = useState(false)
    const [cropped, setCropped] = useState(false)
    if(image==null){
        setImage(image)
        console.log(image)
    }else{
        console.log(image)
    }
    return (
        <div>
            {imageUploaded ?
                (
                    <>
                        {!cropped &&
                            (<ImageCropper image={image} setImage={setImage} cropped={cropped} setCropped={setCropped} setImageUploaded={setImageUploaded} />)
                        } 
                    </>
                ) : (
                    <ImageUpload image={image} setImage={setImage} setImageUploaded={setImageUploaded} setgetStarted={setgetStarted}/>
                )
            }

           {cropped && (<Canvas image={image}/>)} 
        </div>
    )
}

export default ImageHandler