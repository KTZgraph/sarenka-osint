import { Fragment } from "react";
import ShodanForm from "./shodan-form";
import classes from "./credentials.module.css";

function Credentials() {
  return (
    <div className={classes.credentials}>
      <h2>Credentials</h2>
      <div className={classes.credentialItems}>
        <ShodanForm />
        <ShodanForm />
      </div>
    </div>
  );
}

export default Credentials;
