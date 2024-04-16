import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="navbar bg-slate-900 text-white">
        <div className="container flex items-center justify-between p-2 mx-auto">
            <div className="logo">
                <h1 className='text-3xl font-bold text-yellow-300 p-2'>Medium</h1>
            </div>
            <div className="links">
                <ul className='flex gap-10 font-semibold justify-center items-center'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blogs</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Header