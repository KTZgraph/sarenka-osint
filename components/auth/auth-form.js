import { useState, useRef } from "react";
import { createUser, loginUser } from "../../lib/auth";

import classes from "./auth-form.module.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  // na początku ma się pokazać rejestracja
  const [isExistingUser, setIsExistingUser] = useState(false);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmationInputRef = useRef();

  // przełączanie HTMLa zaloguj / zarejestruj
  function switchAuthModeHandler() {
    setIsExistingUser((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    eneteredUsername = usernameInputRef.current.value;
    enteredPassword = passwordInputRef.current.value;

    //logowanie
    if (isExistingUser) {
    }

    // rejestracja
    else {
      // potwierdzenie hasła do rejestracji
      enteredPasswordConfimation = passwordConfirmationInputRef.current.value;
      try {
        const result = createUser(
          eneteredUsername,
          enteredPassword,
          enteredPasswordConfimation
        );
        // dobrze dac stworzenie użytkownika do notyfikacji
        console.log(result);
      } catch (error) {
        // dobrze dac błąd do notyfikacji
        console.log(error);
      }
    }

    //jeśli jest już zalogowany to przekierować na credentiale
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
              ? "Create new account"
              : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
