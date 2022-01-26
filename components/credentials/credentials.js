import CredentialsForm from "./credentials-form";
import classes from "./credentials.module.css";

function Credentials() {
  return (
    <div className={classes.credentials}>
      <h2>Credentials</h2>
      <div className={classes.credentialItems}>
        <CredentialsForm
          title={"User profile"}
          input1={"Old password"}
          input1Type={"password"}
          input1Placeholder={"Insert Old Password"}
          input2={"New Password"}
          input2Type={"password"}
          input2Placeholder={"Insert New password"}
          sourceUrl={null}
        />
        <CredentialsForm
          title={"Shodan"}
          input1={"Shodan username"}
          input1Type={"text"}
          input1Placeholder={"Insert Shodan Username"}
          input2={"Shodan API Key"}
          input2Type={"text"}
          input2Placeholder={"Insert Shodan API Key"}
          sourceUrl={"https://account.shodan.io/"}
        />
      </div>
    </div>
  );
}

export default Credentials;
