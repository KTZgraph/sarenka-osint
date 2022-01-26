import Link from "next/link";
import { useSession } from "next-auth/client";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  const [session, loading] = useSession();

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <div className={classes.languages}>
            <select>
              <option>
                <span>EN</span>
              </option>
              <option>
                <span>PL</span>
              </option>
            </select>
          </div>
        </a>
      </Link>
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
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
