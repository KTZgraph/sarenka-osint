import { useRouter } from "next/router";

import Link from "next/link";
import classes from "./language-switcher.module.css";


function LanguageSwitcher() {
  let router = useRouter();

const changeLanguageHandler = (locale) => {
  console.log(locale)
}

  return (
    <div className={classes.languages}>
        {router.locales.map((locale) => (
          <Link href={router.asPath} locale={locale} key={locale}>
            <a className={classes.btn}>{locale}</a>
          </Link>
        ))}
    </div>
  );
}

export default LanguageSwitcher;
