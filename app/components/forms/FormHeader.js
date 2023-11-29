"use client"

import React from 'react'

const FormHeader = (props) => {
    const {title, subtitle, center} = props;
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <div className='text-2xl font-semibold text-[#00E091]'>
            {title}
        </div>
        <div className='font-light text-white mt-2'>
            {subtitle}
        </div>
    </div>
  )
}

export default FormHeader