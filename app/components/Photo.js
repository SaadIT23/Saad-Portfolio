"use client"
import React from 'react'
import Image from 'next/image'
const Photo = () => {
    return (
        <Image src="/saadbg.png" width={"500"} height={"500"} className='rounded-full  drop-shadow-lg shadow-lg animate-blink-shadow ' priority quality={100} alt='Saad'/>
    )
}

export default Photo
