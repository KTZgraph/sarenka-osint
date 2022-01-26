import { useRef } from "react";

import classes from "./change-password-form.module.css";

function ChangePasswordForm(props) {
  const oldPasswordRef = useRef("");
  const newPasswordRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;
    // walidacja po stronie klienta TODO

    // funckja z komponentu rodzica
    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <section className={classes.section}>
      <h1>Change Password</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.credentials}>
          <div className={classes.credential}>
            <label htmlFor="oldPassword">Old password</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Insert old password"
              required={true}
              ref={oldPasswordRef}
            />
          </div>
          <div className={classes.credential}>
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="password"
              required={true}
              ref={newPasswordRef}
              placeholder="Insert new password"
            />
          </div>
        </div>

        <div className={classes.actions}>
          <button className={classes.action}>Save</button>
        </div>
      </form>
    </section>
  );
}

export default ChangePasswordForm;
