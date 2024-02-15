import React, { useState } from "react";
import ImageUpload from "./ImageUpload/ImageUpload";
import ImageCropper from "./ImageCrop/ImageCropper";
import Canvas from "./Canvas/Canvas";
const ImageHandler = () => {
    const [image, setImage] = useState(null)
    const [imageUploaded, setImageUploaded] = useState(false)
    const [cropped, setCropped] = useState(false)
    return (
        <div>
            {imageUploaded ?
                (
                    <div>
                        {cropped ?
                            (<Canvas image={image} />) :
                            (<ImageCropper image={image} setImage={setImage} cropped={cropped} setCropped={setCropped} />)
                        }
                    </div>
                ) : (
                    <div>
                        <ImageUpload image={image} setImage={setImage} setImageUploaded={setImageUploaded} />
                    </div>
                )
            }


        </div>
    )
}

export default ImageHandler