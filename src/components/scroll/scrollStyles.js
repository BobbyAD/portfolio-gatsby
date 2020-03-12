import { createUseStyles } from "react-jss"

export default createUseStyles({
    scrollContainer: {
        position: "absolute",
        zIndex: "6",
        marginTop: "-3vh",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        "& span": {
            display: "block",
            width: "7vw",
            height: "7vw",
            borderBottom: "3px solid #fff",
            borderRight: "3px solid #fff",
            transform: "rotate(45deg) skewY(-10deg) skewX(-10deg)",
            animation: "$scrollAnimation 2.4s infinite",
            margin: "-2.6vw 0",
        },
        "& span:nth-child(1)": {
            animationDelay: "300ms",
        },
        "& span:nth-child(2)": {
            animationDelay: "200ms",
        },
        "& span:nth-child(3)": {
            animationDelay: "100ms",
        },
    },
    "@keyframes scrollAnimation": {
        "0%": {
            opacity: "0",
            transform: "rotate(45deg) translate(-20px,-20px) skewY(-10deg) skewX(-10deg)",
        },
        "50%": {
            opacity: "1",
        },
        "90%": {
            opacity: "0",
            transform: "rotate(45deg) translate(0px,0px) skewY(-10deg) skewX(-10deg)",
        },
        "100%": {
            opacity: "0",
        }
    },
})
