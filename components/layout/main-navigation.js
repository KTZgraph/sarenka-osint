import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import useTranslation from "next-translate/useTranslation";

import classes from "./main-navigation.module.css";
import LanguageSwitcher from "./language-switcher";

function MainNavigation() {
  // do zmiany języka
  let {t} = useTranslation()

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
              <Link href="/auth">{t('common:login')}</Link>
            </li>
          )}

          {/* link widoczny tylko dla zalogowanych */}
          {session && (
            <li>
              <Link href="/credentials">{t('common:credentials')}</Link>
            </li>
          )}

          {/* logout tylko dla zalogowanych - gdy jest sesja */}
          {session && (
            <li>
              <button onClick={logoutHandler}>{t('common:logout')}</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
