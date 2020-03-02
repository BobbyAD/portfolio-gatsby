import React from "react"

const defaultStyles = {
    fontSize: "5rem",
    fontWeight: "600",
}

export const Title = ({ title, style = {} }) => {
    return (
        <h2 className="title" style={{ ...defaultStyles, ...style }}>
            {title}
        </h2>
    )
}
