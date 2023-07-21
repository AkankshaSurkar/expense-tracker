import { useState, useRef } from "react";
import WelcomeScreen from './LoginForm';

import classes from "./Login.module.css";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOd8QDzAFiZZuCKsX_6aIL2y5wL-Q26GM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOd8QDzAFiZZuCKsX_6aIL2y5wL-Q26GM";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnsecureToken: true,
      }),
      headers: {
        "Content-Type": "application/JSON",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            alert(errorMessage);
            throw new Error(errorMessage);
            // console.log(data);
          });
        }
      })
      .then((data) => {

      })

      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>

      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          {/* <label htmlFor="email">Your Email</label> */}
          <input
            type="email"
            id="email"
            placeholder="email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          {/* <label htmlFor="password">Your Password</label> */}
          <input
            type="password"
            id="password"
            placeholder="password"
            required
            autoComplete="username"
            ref={passwordInputRef}
          />
          <br />
          <br />

          <input
            type="password"
            id="password"
            placeholder="confirm password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "create Account"}</button>
          )}
          {isLoading && <p>Sending request.....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
