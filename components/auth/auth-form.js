import { useState, useRef } from "react";

import classes from "./auth-form.module.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmationInputRef = useRef();

  return (
    <section className={classes.auth}>
      <h1>Sign up</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="username">Your Username</label>
          <input type="text" id="username" required ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="passwordConfirmation">Confirm Your Password</label>
          <input
            type="password"
            id="passwordConfirmation"
            required
            ref={passwordConfirmationInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Create new account</button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
