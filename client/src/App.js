import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

// This is the main component which decides whether to show the Login form
// or the Signup for based on which tab is clicked on
function App() {
    // if the showLogin = true, then it will show the Login form
    // if the showLogin = false, then it will show the Signup form
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="app">
            <h1>PA2 - Login and Signup</h1>

            <div className = "tabs">
                <button onClick = {() => setShowLogin(true)}>Log In</button>
                <button onClick = {() => setShowLogin(false)}>Sign Up</button>
            </div>

            {showLogin ? <Login /> : <Signup />}
        </div>
    );
}

export default App;