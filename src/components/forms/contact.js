import React, { useState } from "react"
import { Title } from "../title/title"
import contactStyles from "./contactStyles"

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

// Netlify Gatsby basic Contact form
//TODO: JS input validation
export const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    })
    const classes = contactStyles()

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...state,
            }),
        })
            .then(res => {
                alert("Thank you!\nI will get back to you as soon as possible.")
                setState({
                    name: "",
                    email: "",
                    message: "",
                })
            })
            .catch(error => alert(error))
    }

    return (
        <div className={classes.container}>
            <Title title="Contact" />

            <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className={classes.form}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>
                <div className={classes.topForm}>
                    <label className={classes.topLabel}>
                        <h3 className={classes.headers}>
                            Name
                        </h3>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={state.name}
                            className={classes.inputField}
                        />
                    </label>
                    <label className={classes.topLabel}>
                        <h3 className={classes.headers}>
                            Email
                        </h3>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={state.email}
                            className={classes.inputField}
                        />
                    </label>
                </div>
                <label className={classes.messageLabel}>
                    <h3 className={classes.headers}>
                        Message
                    </h3>
                    <textarea
                        name="message"
                        onChange={handleChange}
                        value={state.message}
                        className={classes.inputField + ' message'}
                        rows={8}
                    />
                </label>
                <button type="submit" className={classes.button}>Send</button>
            </form>
        </div>
    )
}
