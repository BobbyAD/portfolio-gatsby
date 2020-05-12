import { createUseStyles } from "react-jss"

import side from "../../images/side.png"

export default createUseStyles(theme => ({
    name: {
        zIndex: "1",
        fontVariant: "small-caps",
        width: "100%",
        maxWidth: "1024px",
        margin: "0 auto",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "19.4vw",
        fontWeight: "600",
    },
    first: {
        marginLeft: "-18%",
    },
    last: {
        marginLeft: "20%",
        marginTop: "-4vw",
    },
    nameContainer: {
        display: "flex",
        position: "relative",
        height: "90vh",
        width: "100%",
        backgroundImage: `url(${side})`,
        backgroundPosition: "right top -1800px",
        backgroundRepeat: "no-repeat",
    },
    fade: {
        position: "absolute",
        zIndex: "5",
        height: "100%",
        width: "100%",
        background: "rgb(9, 24, 43)",
        background:
            "linear-gradient(180deg, rgba(7,28,56,0) 80%, rgba(9, 24, 43,1) 100%), linear-gradient(180deg, rgba(7,28,56,0) 60%, rgba(9, 24, 43,1) 100%)",
    },
    darken: {
        position: "absolute",
        zIndex: "0",
        height: "100%",
        width: "100%",
        background: "rgba(9, 24, 43, .2)",
    },
    "@media only screen and (min-width: 1024px)": {
        name: {
            fontSize: "12.2rem",
        },
        last: {
            marginTop: "-2.4rem",
        }
    }
}))
