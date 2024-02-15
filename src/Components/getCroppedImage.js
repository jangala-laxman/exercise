
export function createImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', () => reject())
        image.setAttribute("crossOrigin", "anonymous");
        image.src = url;
    })
}

export function getRadians(degree) {
    return degree * (Math.PI) / 180
}

export function sizeAfterRotation(width, height, rotation) {
    const rotRad = getRadians(rotation);

    return {
        width:
            Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height:
            Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    }
}

export default async function getCroppedImage(
    imageSrc, 
    pixelCrop,
    rotation, 
    flip={horizontal:false, vertical:false}){
        const image = await createImage(imageSrc)
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")

        if(!context) return null

        const rotRad = getRadians(rotation)

        const {width:bBoxWidth, height:bBoxHeight} = sizeAfterRotation(
            image.width, image.height, rotation
        )

        canvas.width = bBoxWidth
        canvas.height = bBoxHeight

        context.translate(bBoxWidth/2, bBoxHeight/2);
        context.rotate(rotRad)
        context.scale(flip.horizontal ? -1:1, flip.vertical?-1:1)
        context.translate(-image.width/2, -image.height/2)
        context.drawImage(image, 0,0)

        const data = context.getImageData(
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height
        )

        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height

        context.putImageData(data, 0,0)

        return new Promise((resolve, reject)=>{
            canvas.toBlob((file)=>{
                resolve(URL.createObjectURL(file))
            }, 'image/jpeg')
        })

} 