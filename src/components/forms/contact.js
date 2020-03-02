import React, { useState } from "react"
import { Title } from "../title/title"

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

// Netlify Gatsby basic Contact form
export const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    })

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
        <div>
            <Title title="Contact" />
            <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Your name:
                        <br />
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={state.name}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Your email:
                        <br />
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={state.email}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Message:
                        <br />
                        <textarea
                            name="message"
                            onChange={handleChange}
                            value={state.message}
                        />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}
