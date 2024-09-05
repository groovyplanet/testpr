import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', {
                username,
                password
            });
            setMessage(response.data);
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <div className="login-box">
            <div className="logo">
                <img src="/logo_cs.png" alt="Logo" />
            </div>
            <div className="form-field">
                <label htmlFor="username">ID</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="password">PW</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>로그인</button>
            {message && <div className="message">{message}</div>}
            <div className="footer">
                <p>5회 이상 비밀번호 오류로 인해 계정이 잠긴 상태입니다.</p>
                <p>&lt;Caps Lock&gt;이 켜져 있습니다.</p>
            </div>
        </div>
    );
};

export default LoginPage;
