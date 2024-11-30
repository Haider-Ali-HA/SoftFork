import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const ButtonOutline = ({text,showIcon=false}) => {
  return (
    <button className="bg-white border-primary hover:bg-primary hover:text-white  border text-primary font-gilroy font-semibold text-base md:text-lg transition-all duration-200  py-2 md:py-4 rounded-lg w-full flex items-center justify-center">
      <div className="flex items-center justify-center gap-3">
      <p>{text}</p>
      {showIcon && <FaArrowRight />}
      </div>
    </button>
  )
}

export default ButtonOutline
