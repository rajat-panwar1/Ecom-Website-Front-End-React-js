import React from 'react'

const ImageHelper = ({product}) => {
    const imageurl = product ? product.image : `https://cdn.vox-cdn.com/thumbor/rjC2vZezmza_Vqwtc0NrUpWmAQQ=/366x80:1263x685/920x613/filters:focal(634x212:896x474):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67233661/Ef4Do0cWkAEyy1i.0.jpeg`
    return (
        <div className="rounded border border-sucess p-2">
            <img src={imageurl}
            style={{maxHeight:"100%", maxWidth:"100%"}}
            className="mb-3 rounded"
            alt=""/>
        </div>
    )
}

export default ImageHelper