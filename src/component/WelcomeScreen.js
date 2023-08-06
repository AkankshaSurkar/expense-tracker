import React from "react";
import Profile from "./Profile";

const WelcomeScreen = () => {
  return (
    <div>
      <h1>Welcome to Expense Tracker</h1>
      <button>Complete Profile</button>
      <div><Profile/></div>
    </div>
  );
};

export default WelcomeScreen;
