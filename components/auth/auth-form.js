import { useState, useRef } from "react";
import classes from "./auth-form.module.css";
import {createUser} from '../../lib/auth-utils';


function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  // na początku ma się pokazać rejestracja
  const [isExistingUser, setIsExistingUser] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmationInputRef = useRef();

  // przełączanie HTMLa zaloguj / zarejestruj
  function switchAuthModeHandler() {
    setIsExistingUser((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // waldiacja na froncie - pomaga użźytkownikowi, ale to ta na backendzie realnie gwarantuje bezpieczenstwo

    //logowanie
    if (isExistingUser) {
      // log user in
    }

    // rejestracja
    else {
      try {
        // potwierdzenie hasła do rejestracji
        const enteredPassConfirm = passwordConfirmationInputRef.current.value;
        if (enteredPassword !== enteredPassConfirm) {
          throw new Error("Passwords don't match");
        }
        const result = await createUser(enteredEmail, enteredPassword);
        // dobrze dac stworzenie użytkownika do notyfikacji
        // wiem, że użytkownik został stworozny
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
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
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
