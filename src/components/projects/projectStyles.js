import { createUseStyles } from "react-jss"

export default createUseStyles({
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
    },
    projectContainer: {
        display: 'flex',
        width: "96%",
        margin: "1vh 0",
        padding: "2vh 2%",
        backgroundColor: "#061221",
    },
    descriptionContainer: {
        width: "70%",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#01FF61",
        width: "30%",
    },
    spacer: {
        height: "10vh",
    },
    description: {
        fontSize: "1.3rem",
    },
})
