import React from "react"
import { createUseStyles } from "react-jss"

export const Title = ({ title }) => {
    const titleStyles = createUseStyles({
        title: {
            fontSize: "5rem",
            fontWeight: "600",
            margin: "4rem 0 1rem",
        },
    })

    const classes = titleStyles()

    return <h2 className={"title " + classes.title}>{title}</h2>
}
