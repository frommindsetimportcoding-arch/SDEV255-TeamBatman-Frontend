import { useState } from "react";
import { API_BASE_URL } from "../.config";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        try {
            const response = await fetch(`${API_BASE_URL}/auth`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Invalid credentials.");
            }

            // Secure Session Storage
            localStorage.setItem("token", data.token);
            localStorage.setItem("auth", data.auth);
            localStorage.setItem("username", data.username);
            localStorage.setItem("firstName", data.firstName);
            localStorage.setItem("lastName", data.lastName);
            localStorage.setItem("role", data.role);

            window.location.replace("index.html");
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="input-group">
                <label htmlFor="login-username">Username </label>
                <input
                    type="text"
                    id="login-username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /> 
            </div>

            <div className="input-group">
                <label htmlFor="login-password">Password </label>
                <input
                    type="text"
                    id="login-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /> 
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="login-button">Sign In</button>
        </form>
    );
}

export default LoginForm;