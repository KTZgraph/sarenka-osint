import { useState } from "react";

import classes from './change-password-form.module.css';

function ChangePasswordForm(){
    const [enteredOldPassword, setEnteredOldPassword] = useState(""); 
    const [enteredNewPassword, setEnteredNewPassword] = useState(""); 

    return(
        <section className={classes.section}>
        <h1>Change Password</h1>
        <form className={classes.form}>
          <div className={classes.credentials}>
            <div className={classes.credential}>
              <label htmlFor="oldPassword">Old password</label>
              <input
                type="password"
                id="oldPassword"
                placeholder="Insert old password"
                required={true}
                value={enteredOldPassword}
                onChange={(event) => setEnteredOldPassword(event.target.value)}
              />
            </div>
            <div className={classes.credential}>
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="password"
                required={true}
                value={enteredNewPassword}
                placeholder="Insert new password"
                onChange={(event) => setEnteredNewPassword(event.target.value)}
              />
            </div>
          </div>
  
          <div className={classes.actions}>
            <button className={classes.action}>Save</button>
          </div>
        </form>
      </section>
    )
}


export default ChangePasswordForm;