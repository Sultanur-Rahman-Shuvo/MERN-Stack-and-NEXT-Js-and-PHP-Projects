import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-around bg-indigo-900 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8 hover:cursor-pointer'>myTask</span>
        </div>
        <ul className='flex gap-8 mx-9'>
            <li className='hover:cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='hover:cursor-pointer hover:font-bold transition-all'>My Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
