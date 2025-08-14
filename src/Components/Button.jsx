import React from 'react'

const Button = ({
    text = "",
    classes = "",
    onClick=() => {}
}) => {
  return (
    <button className={`${classes}  py-1 px-2 rounded-xl text-white font-semibold bg-gradient-to-r from-[#c59adf] to-[#e5a4a8] shadow-lg`} onClick={onClick}>
            {text}
          </button>
  )
}

export default Button