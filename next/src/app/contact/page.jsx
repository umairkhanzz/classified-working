import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='contact bg-white flex justify-center mx-auto '>
      <Image  src="/images/contact.png" width={1350} height={800} alt="Picture of the car" />
    </div>
  )
}

export default Contact