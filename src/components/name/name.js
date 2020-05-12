import React from "react"

// import "./name.css"

import nameStyles from "./nameStyles"

const Name = () => {
    const classes = nameStyles()

    return (
        <div className={classes.nameContainer}>
            <div className={classes.name}>
                <h1 className={classes.first}>Robert</h1>
                <h1 className={classes.last}>Driskell</h1>
            </div>
            <div className={classes.fade} />
            <div className={classes.darken} />
        </div>
    )
}

export default Name
