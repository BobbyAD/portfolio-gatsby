import React from 'react'

export const Title = ({title, style}) => {
    return (
        <h2 className="title" style={style}>
            {title}
        </h2>
    )
}
