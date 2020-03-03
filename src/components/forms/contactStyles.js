import { createUseStyles } from 'react-jss'

export default createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
    },
    form: {
        display: 'flex',
        width: "100%",
        flexDirection: 'column',
        margin: "2vh 2%"
    },
    topForm: {
        display: "flex",
        width: "75%",
        justifyContent: 'space-between',
    },
    topLabel: {
        display: "flex",
        flexDirection: 'column',
        width: "45%",
    },
    messageLabel: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        color: "#01FF61",
        cursor: "pointer",
        display: "inline-block",
        width: "10%",
        alignSelf: "center",
        padding: "2vh 0 .5rem",
        fontSize: "1.4rem",
        background: "none",
        border: "none",
        borderBottom: "2px solid #01FF61",
        margin: "1rem 0 3rem"
    }
})