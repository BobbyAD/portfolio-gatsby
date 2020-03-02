import React from "react"
import { createUseStyles } from "react-jss"

const titleStyles = createUseStyles({
    title: {
        fontSize: "5rem",
        fontWeight: "600",
        marginBottom: "2rem",
    },
})

export const Title = ({ title }) => {
    const classes = titleStyles()

    return <h2 className={"title " + classes.title}>{title}</h2>
}
