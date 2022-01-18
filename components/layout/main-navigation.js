import Link from "next/link";
import classes from "./main-navigation.module.css";

function MainNavigation() {
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
          <li>
            <Link href="/auth">Login</Link>
          </li>
          <li>
            <Link href="/credentials">Credentials</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
