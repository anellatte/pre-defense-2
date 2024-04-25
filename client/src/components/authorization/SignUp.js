import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate

function SignUp({ onLogin }) {
    const navigate = useNavigate(); // Assign useNavigate to navigate
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            await axios
                .post("http://localhost:8000/signup", {
                    email,
                    password,
                    username
                })
                .then((res) => {
                    if (res.data === "exist") {
                        alert("User already exists");
                    } else if (res.data === "notexist") {
                        onLogin({ username, email });
                        navigate("/home", { state: { id: email } });
                    }
                })
                .catch((e) => {
                    alert("wrong details");
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="signup">
            <div className="signup__inner">
                <div className="signup__logo"></div>

                <div className="signup-content">
                    <div className="signup__item">
                        <h1 className="signup__subtitle title">WELCOME TO SOILESAY</h1>
                        <p className="signup__text text">Practice Kazakh Language skills through fun and interactive games!</p>
                    </div>

                    <div className="signup__item">
                        <h2 className="signup__title title">CREATE ACCOUNT</h2>

                        <form className="signup__form" action="POST">
                            <input
                                className="signup__input input"
                                type="text"
                                placeholder="Enter Username"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            ></input>

                            <input
                                className="signup__input input"
                                type="email"
                                placeholder="Enter Email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            ></input>

                            <input
                                className="signup__input input"
                                type="password"
                                placeholder="Create password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            ></input>

                            <input className="button-submit" type="submit" onClick={submit} value="Sign Up" />

                            <br />

                            <p className="text">OR</p>

                            <button className="button button-login">
                                <Link className="link-login" to="/">
                                    Login
                                </Link>
                            </button>
                        </form>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
