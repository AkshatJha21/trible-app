import React from 'react'

function ButtonFill(props) {
  const {text, className, onClick} = props;
  return (
    <div>
        <button className={`text-[#141313] px-4 py-2 rounded-sm bg-[#00E091] outline outline-2 outline-offset-0 outline-[#00E091] ${className}`} onClick={onClick}>
          {text}
          </button>
    </div>
  )
};
export default ButtonFill