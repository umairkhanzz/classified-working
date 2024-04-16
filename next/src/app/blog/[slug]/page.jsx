import React from 'react'
import Image from 'next/image'

const SinglePost = () => {
  return (
    <div className="wrapper bg-white">
        <div className="container flex gap-10 justify-between p-4 py-8 mx-auto">
            <div className="left w-[40%]">
               <Image src="/images/phone.jpg" width={500} height={500} alt="Picture of the car" />
            </div>
            <div className="right w-[60%] p-2 py-8">
                <p className='text-5xl font-semibold mb-5'>Title</p>
                <p className='text-lg font-semibold mb-2'>Auther: <span>John Doe</span></p>
                <p className='text-blue-800 mb-4'>Published: <span>10-03-2024</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia id deleniti laudantium! Quasi quas dicta, eveniet expedita sapiente obcaecati voluptate iste animi illum vitae magni natus inventore explicabo. Dignissimos animi, commodi delectus natus cum sapiente fuga? Quidem tempore, quisquam, corporis ad adipisci at a explicabo sapiente et laudantium incidunt nisi cum corrupti architecto laborum eligendi id quibusdam hic quam? Nihil voluptas quisquam illum. Eius molestias enim delectus asperiores facilis omnis rerum quidem unde. A, quod. Explicabo voluptate excepturi obcaecati! Asperiores praesentium exercitationem cumque, magni ea perspiciatis, omnis vitae eos tenetur illum minima delectus laborum quisquam? Aliquid dolore cupiditate inventore magni.</p>
            </div>
        </div>
    </div>
  )
}

export default SinglePost