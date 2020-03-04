import { createUseStyles } from 'react-jss'

export default createUseStyles({
    title: {},
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        '& .title': {
            alignSelf: "flex-start",
        },
    },
    skillContainer: {
        width: "100%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    skill: {
        border: "2px solid #01FF61",
        borderRadius: "10px",
        width: "45%",
        margin: "10px 0",
        padding: "20px 0",
        display: 'flex',
        justifyContent: 'center',
        fontSize: "calc(.4rem + 3vmin)",
        backgroundColor: "#061221",
    },
})