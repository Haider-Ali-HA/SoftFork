import React from 'react'

const SubHeading = ({ text, className}) => {

    //find /n in text and replace it with <br/>
    text = text.split('\n').map((item, key) => {
        return <span key={key}>{item}<br/></span>
    })

    return (
        <h3 className={`text-center text-secondary px-3 sm:text-lg ${className}`}>
            {text}
        </h3>
    )
}

export default SubHeading
