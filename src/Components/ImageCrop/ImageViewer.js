import React from "react"
import './ImageCropper.css'

const ImageViewer=({cropped, croppedImage, showCroppedImage})=>{
    return(
        <div>   
            <img src={cropped} alt="" width={1024} height={768} />

            <div>
                <button>Next</button>
            </div>
        </div>
    )
}

export default ImageViewer