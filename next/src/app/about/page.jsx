import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div className="about bg-white ">
      <div className="container flex justify-center items-center flex-col p-2">
        <p className='text-3xl font-bold text-blue-800 text-center py-2 mb-4'>About US</p>
        <Image src="/images/bmw.jpg" width={800} height={800} alt="Picture of the car" />
      </div>
    </div>
  )
}

export default About