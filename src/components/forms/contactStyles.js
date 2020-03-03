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
        marginBottom: "2rem",
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
    inputField: {
        backgroundColor: "#061221",
        border: "none",
        padding: ".5rem .2rem .2rem",
        color: "whitesmoke",
        fontSize: "1.1rem",
        borderBottom: "2px solid #01FF61",
        transition: "1s",
        '&:invalid': {
            borderBottom: "2px solid red",
            boxShadow: "none",
        },
        '&.message': {
            
        }
    },
    headers: {
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#01FF61",
        width: "30%",
        marginBottom: ".4rem",
    },
    button: {
        color: "#01FF61",
        cursor: "pointer",
        display: "inline-block",
        alignSelf: "center",
        padding: "2vh 2% .5rem",
        fontSize: "1.4rem",
        background: "none",
        border: "none",
        borderBottom: "2px solid #01FF61",
        margin: "1rem 0 3rem",
    }
})