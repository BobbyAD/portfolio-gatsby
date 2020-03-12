import React from 'react'
import scrollStyles from "./scrollStyles"

const Scroll = () => {
    const classes = scrollStyles()

    return (
        <div className={classes.scrollContainer}>
            <span />
            <span />
            <span />
        </div>
    )
}

export default Scroll