import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function getImage({ img }) {
    return <LazyLoadImage
        effect='blur'
        src={img}
    />
}
