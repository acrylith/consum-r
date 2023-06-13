"use client"

import { urlFor } from '@/sanity'
import React, { useState } from 'react'

export default function Gallery(props) {
    const { image } = props
    const [current, setCurrent] = useState(image[0])
    console.log(image)
    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 items-center md:items-start md:justify-evenly mb-8'>
            <ul className='flex md:flex-col gap-2 overflow-auto'>
                {
                    image.map(img => 
                        <li
                            key={img._key}
                            className={`w-16 h-16 border-2 ${current !== img ? 'brightness-75 border-gray-300' : 'border-purple-700'}`}
                            onClick={() => setCurrent(img)}
                        >
                            <img className={`object-contain h-full w-full`} src={urlFor(img).url()} />
                        </li>    
                    )
                }
            </ul>
            <div className='w-[300px] h-[300px] md:h-auto md:w-[500px] aspect-square flex justify-center items-center bg-white'>
                <img className='object-contain h-full w-full' src={urlFor(current).url()} />
            </div>
        </div>
    )
}