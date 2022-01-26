// chronione - przekierować jeśli użytkownik not authenticated
// import { useSession } from "next-auth/client";
// const [session, loading] = useSession(); - problem, może np być wiecznie loading

import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";

import CredentialsForm from "./credentials-form";
import classes from "./credentials.module.css";
import Spinner from "../ui/spinner";

function Credentials() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSession, setLoadedSession] = useState();

  // żeby pobrać sesję gdy ten komponent jest wyrenderowany
  useEffect(() => {
    //zwraca promisa
    getSession().then((session) => {
      // może być null jak niezalogowany
      setLoadedSession(session);
      setIsLoading(false); // dane pobrane
    });
  }, []);

  if (isLoading) {
    // mój własny stan czy jest logowanie - obejsci eproblemu wiecznego logowania danych
    return <Spinner />;
  }

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
