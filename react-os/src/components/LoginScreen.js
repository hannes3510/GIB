import { useState } from 'react';
import '../LoginScreen.css';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="user-icon">👤</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="login-footer">
        <span>Powered by ReactOS</span>
      </div>
    </div>
  );
};

export default LoginScreen;