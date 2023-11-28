import React from 'react'

function ButtonOutline(props) {
  const {text, className, onClick} = props;
  return (
    <div>
        <button className={`text-white px-4 py-2 text-md rounded-sm outline outline-1 outline-offset-0 ${className}`} onClick={onClick}>
          {text}
          </button>
    </div>
  )
};
export default ButtonOutline