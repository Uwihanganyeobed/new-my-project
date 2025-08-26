import React from 'react'

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center
    justify-center bg-gray-100'>
        <div className='text-4l font-bold text-gray-800'>
            <p className='text-gray-600'>Page Not Found</p>
            <a href="/" 
            className='text-blue-500 hover:underline'>Go Home</a>
        </div>
    </div>
  )
}
