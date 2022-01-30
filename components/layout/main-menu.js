import Link from "next/link";
import { useSession } from "next-auth/client";

import classes from "./main-menu.module.css";
import AppImage from "./app-image";

function MainMenu() {
  const [session, loading] = useSession();

  return (
    <nav className={classes.sidebar}>
      {/* Hamburger menu */}
      <div className={classes.hamburgerMenu}>
        <div className={[classes.line, classes.line1].join(" ")}></div>
        <div className={[classes.line, classes.line2].join(" ")}></div>
        <div className={[classes.line, classes.line3].join(" ")}></div>
      </div>
      {/* logo aplikacji */}
      {session && !loading && <AppImage userEmail={session.user.email} />}
      {(!session || loading) && <AppImage />}
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/">
            <a className={classes.link}>
              <span className={classes.text}>Search</span>
            </a>
          </Link>
        </li>

        <li className={classes.item}>
          <Link href="/cwe">
            <a className={classes.link}>
              <span className={classes.text}>CWE List</span>
            </a>
          </Link>
        </li>

        <li className={classes.item}>
          <Link href="/cve">
            <a className={classes.link}>
              <span className={classes.text}>CVE List</span>
            </a>
          </Link>
        </li>

        {/* link widoczny tylko dla zalogowanych */}
        {session && (
          <li className={classes.item}>
            <Link href="/credentials">Credentials</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MainMenu;
