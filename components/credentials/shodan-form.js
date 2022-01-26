import Link from "next/link";
import { useState } from "react";

import classes from './shodan-form.module.css';

function ShodanForm(){
    const [enteredUsername, setEnteredUsername] = useState(""); 
    const [enteredApiKey, setEnteredApiKey] = useState(""); 

    return(
        <section className={classes.section}>
        <h1>Shodan API</h1>
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
              <label htmlFor="apiKey">Shodan API Key</label>
              <input
                type="text"
                id="apiKey"
                required={true}
                value={enteredApiKey}
                placeholder="Insert Shodan API Key"
                onChange={(event) => setEnteredApiKey(event.target.value)}
              />
            </div>
          </div>
  
          <div className={classes.actions}>
            <button className={classes.action}>Save</button>
            <Link href="https://account.shodan.io/">
              <a className={classes.source}>acount</a>
            </Link>
          </div>
        </form>
      </section>
    )
}


export default ShodanForm;