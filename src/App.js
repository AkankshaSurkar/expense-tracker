import React, { useState } from "react";
import "./App.css";
import LoginForm from "./component/LoginForm";
import WelcomeScreen from "./component/WelcomeScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    console.log("hiii");
    setIsLoggedIn(true);
  };

  return (
<div>
      {!isLoggedIn ? <WelcomeScreen /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}

export default App;
