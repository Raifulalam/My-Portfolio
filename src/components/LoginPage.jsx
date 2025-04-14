import React, { useState } from 'react';
import '../styles/Login.css';  // Fixed path
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);  // Loading state for submitting the form
    const [error, setError] = useState('');  // Error state for handling errors
    const navigate = useNavigate();
    const BaseUrl = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);  // Show the loading state while submitting

        try {
            // Make the POST request with axios
            const response = await axios.post(`${BaseUrl}/user/userlogin`, {
                email,
                password
            });

            const data = response.data;
            if (data.token) {
                // Store the token in localStorage after a successful login
                localStorage.setItem('authToken', data.token);
                alert("Login successful");

                setEmail('');
                setPassword('');
                navigate('/');  // Navigate to the home page or dashboard
            } else {
                setError("Login failed, please check your credentials.");
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);  // Stop loading when the request is complete
        }
    };

    return (
        <div className='login-page'>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}  {/* Display error message */}

                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
