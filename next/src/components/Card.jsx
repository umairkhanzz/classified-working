import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className="wrapper bg-white rounded-xl w-80 mb-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="box p-4 mx-auto">
        <div className="pic mb-5">
          <Image src="/images/bmw.jpg" width={500} height={500} alt="Picture of the car" />
        </div>
        <div className="content">
          <h1 className='text-2xl font-semibold mb-2'>Title</h1>
          <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem.</p>
          <Link className='text-white bg-red-800 rounded-lg px-5 py-2 mb-8' href="/blog/post">Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default Card