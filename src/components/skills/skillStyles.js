import { createUseStyles } from 'react-jss'

export default createUseStyles({
    title: {},
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        alignSelf: "flex-start",
    },
    skill: {
        border: "1px solid green",
    },
})