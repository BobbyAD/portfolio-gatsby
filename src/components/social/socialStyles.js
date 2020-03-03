import { createUseStyles } from 'react-jss'

export default createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        fontSize: "1.1rem",
        color: "whitesmoke",
        textDecoration: "underline",
    },
    linkContainer: {
        margin: ".5rem 0"
    }
})