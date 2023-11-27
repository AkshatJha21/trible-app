import React from 'react'

function Button(props) {
  const {text, onClick, className} = props;
  return (
    <div>
        <button className={className} onClick={onClick}>
          {text}
          </button>
    </div>
  )
};
export default Button