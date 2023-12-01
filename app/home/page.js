import React from 'react'

const page = () => {
  return (
    <div className='flex'>
        <div className='w-1/5'>
            Left
        </div>
        <div className='flex-1 bg-white'>
            Middle
        </div>
        <div className='w-1/5 border-white border-2'>
            Right
        </div>
    </div>
  )
}

export default page