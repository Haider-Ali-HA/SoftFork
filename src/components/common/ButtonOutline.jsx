import React from 'react'

const ButtonOutline = ({text,extraText}) => {
  return (
    <button className="bg-white border-primary hover:bg-primary hover:text-white  border text-primary font-gilroy font-semibold text-base md:text-lg transition-all duration-200  py-2 md:py-4 rounded-lg w-full">
      {text}
    </button>
  )
}

export default ButtonOutline
