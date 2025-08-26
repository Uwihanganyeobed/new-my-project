import React from 'react'

export default function Welcome() {
  return (
    <div className='h-screen flex flex-col'>
        <div className='flex flex-col items-center 
        justify-center text-center bg-gray-100'>
            <h2 className='text-5xl font-extrabold text-gray-800'>
                Welcome 🎉
            </h2>
            <p className='mt-3 text-lg text-gray-600'>
                This is Your Dreamed Book Store Website
            </p>
            <a href="/login" className='mt-6 px-6 py-3 rounded-lg
             bg-blue-600 text-white hover:bg-blue-500 shadow-sm'>
                Get Started
             </a>
             <div className='hiddwen md:flex flex-1 items-center 
             justify-center
             '>
                <img src="https://i.imgur.com/hrEBm93.jpeg"
                 alt="Welcome"
                className='rounded-lg shodow-lg max-h-[70%]'
                />
             </div>

            </div>        
    </div>
  )
}
