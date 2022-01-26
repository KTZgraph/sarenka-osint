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
            <label htmlFor="input1">{props.input1}</label>
            <input
              type={props.input1Type}
              id="input1"
              placeholder={props.input1Placeholder}
              required={true}
              value={enteredUsername}
              onChange={(event) => setEnteredUsername(event.target.value)}
            />
          </div>
          <div className={classes.credential}>
            <label htmlFor="input2">{props.input2}</label>
            <input
              type={props.input2Type}
              id="input2"
              required={true}
              value={enteredApiKey}
              placeholder={props.input2Placeholder}
              onChange={(event) => setEnteredApiKey(event.target.value)}
            />
          </div>
        </div>

        <div className={classes.actions}>
          <button className={classes.action}>Save</button>
          {/* jak jest sourceUrl to pokaz link */}
          {props.sourceUrl && <Link href={props.sourceUrl}>
            <a className={classes.source}>acount</a>
          </Link>}
          
        </div>
      </form>
    </section>
  );
}

export default CredentialsForm;

// username
// API key
