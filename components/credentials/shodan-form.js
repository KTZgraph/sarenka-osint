import { useState } from "react";
import classes from "./shodan-form.module.css";

function ShodanForm() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredApiKey, setEnteredApiKey] = useState("");

  return (
    <section className={classes.section}>
      <h1>Shodan</h1>
      <form className={classes.form}>
        <div className={classes.credentials}>
          <div className={classes.credential}>
            <label htmlFor="username">Shodan Username</label>
            <input
              type="text"
              id="username"
              placeholder="Insert Shodan Username"
              required={true}
              value={enteredUsername}
              onChange={(event) => setEnteredUsername(event.target.value)}
            />
          </div>
          <div className={classes.credential}>
            <label htmlFor="api-key">Shodan API Key</label>
            <input
              type="text"
              id="api-key"
              required={true}
              value={enteredApiKey}
              placeholder="Insert Shodan API Key"
              onChange={(event) => setEnteredApiKey(event.target.value)}
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

export default ShodanForm;

// username
// API key