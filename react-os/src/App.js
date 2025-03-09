import { useState } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/Desktop';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      {!isLoggedIn ? (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

export default App;