import Link from "next/link";
import { useState } from "react";
import classes from "./credentials-form.module.css";

function CredentialsForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredApiKey, setEnteredApiKey] = useState("");

  return (
    <section className={classes.section}>
      <h1>{props.title}</h1>
      <form className={classes.form}>
        <div className={classes.credentials}>
          <div className={classes.credential}>
            <label htmlFor="username">{props.username}</label>
            <input
              type="text"
              id="username"
              placeholder={props.usernamePlaceholder}
              required={true}
              value={enteredUsername}
              onChange={(event) => setEnteredUsername(event.target.value)}
            />
          </div>
          <div className={classes.credential}>
            <label htmlFor="api-key">{props.apiKey}</label>
            <input
              type="text"
              id="api-key"
              required={true}
              value={enteredApiKey}
              placeholder={props.apiKeyPlaceholder}
              onChange={(event) => setEnteredApiKey(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.actions}>
          <button className={classes.action}>Save</button>
          <Link href={props.sourceUrl}>
            <a className={classes.action}>acount</a>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default CredentialsForm;

// username
// API key
