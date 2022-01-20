import { Fragment } from "react";
import CredentialsForm from "./credentials-form";
import classes from "./credentials.module.css";

function Credentials() {
  return (
    <div className={classes.credentials}>
      <h2>Credentials</h2>
      <div className={classes.credentialItems}>
        <CredentialsForm
          title={"Shodan"}
          username={"Shodan username"}
          usernamePlaceholder={"Insert Shodan Username"}
          apiKey={"Shodan API Key"}
          apiKeyPlaceholder={"Insert Shodan API Key"}
          sourceUrl={"https://account.shodan.io/"}

        />

        {/* <CredentialsForm 
                  title={"Censys"}
                  username={"Censys API ID"}
                  usernamePlaceholder={"Insert Censys API ID"}
                  apiKey={"Censys Secret"}
                  apiKeyPlaceholder={"Insert Censys Secret"}
                  sourceUrl={"https://search.censys.io/account/api"}
                  /> */}
      </div>
    </div>
  );
}

export default Credentials;
