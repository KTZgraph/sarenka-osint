// chronione - przekierować jeśli użytkownik not authenticated

import ChangePasswordForm from './change-password-form';
import ShodanForm from "./shodan-form";

import classes from "./credentials.module.css";

function Credentials() {
  //wyrenderuje się jak jest zalogowany - tego pilnuje /pages/credentials.js w getServerSideProps logice

  return (
    <div className={classes.credentials}>
      <h2>Credentials</h2>
      <div className={classes.credentialItems}>
        <ChangePasswordForm />
        <ShodanForm />
      </div>
    </div>
  );
}

export default Credentials;
