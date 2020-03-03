import { createUseStyles } from "react-jss"

export default createUseStyles({
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
    },
    projectContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: "96%",
        margin: "1vh 0",
        padding: "2vh 2% 4vh",
        backgroundColor: "#061221",
    },
    descriptionContainer: {
        width: "100%",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#01FF61",
        width: "30%",
        marginBottom: "1.1rem",
    },
    spacer: {
        height: "10vh",
    },
    description: {
        fontSize: "1.3rem",
        marginBottom: "1rem",
    },
    responsibilities: {
        fontSize: "1.3rem",
        marginBottom: "1rem",
    },
    link: {
        fontSize: "1.1rem",
        color: "whitesmoke",
        textDecoration: 'underline',
        margin: ".5rem 0"
    }
})
