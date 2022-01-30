import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import classes from "./main-navigation.module.css";
import LanguageSwitcher from "./language-switcher";

function MainNavigation() {
  // do zmiany języka

  const [session, loading] = useSession();

  function logoutHandler() {
    //zwraca promisa ale useSession się aktulizuje wiec tutaj nic nie robię
    //z automatu cookie z JWT się wyczyści
    // devtools -> Application -> cookies-> <serwer:port po lewej> -> next-auth.session.token
    signOut();
  }

  return (
    <header className={classes.header}>
      <LanguageSwitcher />
      <nav>
        <ul>
          {/* login tylko gdy niezalogowany - brak sesji i już dane są pobrane */}
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}

          {/* link widoczny tylko dla zalogowanych */}
          {session && (
            <li>
              <Link href="/credentials">Credentials</Link>
            </li>
          )}

          {/* logout tylko dla zalogowanych - gdy jest sesja */}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
