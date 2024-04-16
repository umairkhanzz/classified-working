import React from 'react'

const Footer = () => {
  return (
    <div className="footer h-40 flex items-center bg-slate-900 text-white">
      <div className="container flex justify-between items-center p-2 mx-auto">
        <div className="left">
          <h1 className='text-4xl font-bold p-2'>Medium</h1>
        </div>
        <div className="right">
            <p>All right reserved 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Footer