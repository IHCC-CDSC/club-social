import { useState, FormEventHandler } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [processing, setProcessing] = useState(false);

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        setProcessing(true);

        try {
            const response = await axios.post('/api/login', {
                email,
                password,
            });

            // Example of handling response
            if (response.status === 200) {
                setMessage('Login successful!');
                // Example: Redirect to another page
                // window.location.href = '/dashboard';
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setMessage(error.response.data.message || 'Invalid credentials');
            } else {
                setMessage('An unexpected error occurred');
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={processing}>
                    {processing ? 'Logging in...' : 'Log In'}
                </button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}
