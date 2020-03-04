import { createUseStyles } from 'react-jss'

export default createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%"
    },
    link: {
        fontSize: "1.1rem",
        color: "whitesmoke",
        textDecoration: "underline",
    },
    linkContainer: {
        margin: ".5rem 2%"
    },
    about: {
        display: "block",
        float: "left",
        fontSize: "1.3rem",
        margin: "0 2%",
        '& div': {
            display: "block",
            float: "left",
            width: "7.8rem",
            margin: "0 1rem .5rem 0",
        }
    }
})