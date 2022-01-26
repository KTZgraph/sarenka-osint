// chronione - przekierować jeśli użytkownik not authenticated

import ChangePasswordForm from "./change-password-form";
import ShodanForm from "./shodan-form";
import classes from "./credentials.module.css";

function Credentials() {
  //wyrenderuje się jak jest zalogowany - tego pilnuje /pages/credentials.js w getServerSideProps logice
  async function changePasswordHandler(passwordData) {

    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    // UI - dać userowi odpowiedź jakąs
    console.log(data);
  }

  return (
    <div className={classes.credentials}>
      <h2>Credentials</h2>
      <div className={classes.credentialItems}>
        <ChangePasswordForm onChangePassword={changePasswordHandler} />
        <ShodanForm />
      </div>
    </div>
  );
}

export default Credentials;
