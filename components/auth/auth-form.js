import { useState, useRef } from "react";

import classes from "./auth-form.module.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <section className={classes.section}>
      <form className={classes.form}>
        <div className={classes.auth}>
          <label htmlFor="username">Your Username</label>
          <input type="text" id="username" required ref={usernameInputRef} />
        </div>

        <div className={classes.action}>
          <button>Login</button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
