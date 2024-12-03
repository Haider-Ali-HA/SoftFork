import React from 'react'

const SubHeading = ({ text }) => {

    //find /n in text and replace it with <br/>
    text = text.split('\n').map((item, key) => {
        return <span key={key}>{item}<br/></span>
    })

    return (
        <h3 className="text-center text-secondary px-3 text-lg">
            {text}
        </h3>
    )
}

export default SubHeading
