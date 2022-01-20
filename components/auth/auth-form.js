import { useState, useRef } from "react";

import classes from "./auth-form.module.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  // na początku ma się pokazać rejestracja
  const [isExistingUser, setIsExistingUser] = useState(false);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmationInputRef = useRef();

  // przełączanie zaloguj / zarejestruj
  function switchAuthModeHandler() {
    setIsExistingUser((prevState) => !prevState);
  }

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
        {/* potwierdzenie hasła tylko przy rejestracji */}
        {!isExistingUser && (
          <div className={classes.control}>
            <label htmlFor="passwordConfirmation">Confirm Your Password</label>
            <input
              type="password"
              id="passwordConfirmation"
              required
              ref={passwordConfirmationInputRef}
            />
          </div>
        )}

        <div className={classes.actions}>
          {/* jeśłi uzytkonik istnieje to pokazaż przycisk logowania */}
          <button>{isExistingUser ? "Login" : "Create account"}</button>

          {/* przycisk zmiany formularzy */}
          {/* jeśli użytkownik nie istnieje to pokaż formularz rejestracji */}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isExistingUser
              ? "Login with existing account"
              : "Create new account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
