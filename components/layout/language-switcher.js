import { useRouter } from "next/router";

import Link from "next/link";
import classes from "./language-switcher.module.css";
import Select, { components } from "react-select";

const options = [
  {value: "en-US", label: "EN"},
  {pl: "pl", label: "PL"},
]

function LanguageSwitcher() {
  let router = useRouter();

const changeLanguageHandler = (locale) => {
  console.log(locale)
}

  return (
    <div className={classes.languages}>
      <select>
        {router.locales.map((locale) => (
          <option key={locale} value={locale} onChange={changeLanguageHandler}>
            {locale}
            {/* <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link> */}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
