import React, { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import WelcomeScreen from "./component/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    console.log("hiii");
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? <WelcomeScreen /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
