import React from 'react'
import Img1 from '../assets/close-up-box-with-ripe-vegetables.jpg'
import Video from '../assets/video.mp4'

export const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
      <video src={Video} muted loop autoPlay alt="1" className='w-full h-full object-cover'/>
      <div className='max-w-[1140px] m-auto'>
       <div className='absolute top-[25%] w-full md:[50%] max-w-[1280px] h-full flex flex-col text-white p-4'>
        <h1 className='text-[100px] ml-[200px] font-Roboto'> Binoga Trading</h1>
       </div>
      </div>
    </div>

  )
}
