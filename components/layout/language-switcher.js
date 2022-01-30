import { i18n, I18nContext } from "next-i18next";
import {useContext} from 'react'

import classes from "./language-switcher.module.css";

function LanguageSwitcher() {
  // sprawdzanie na któryum jezyku jesteśmy aktualnie
  const {i18n: {language}} = useContext(I18nContext);


  return (
    <div className={classes.languages}>
      <button
        type="button"
        onClick={() => i18n.changeLanguage("en")}
        className={`${language === "en" ? classes.active : ""}`}
      >
        en
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage("pl")}
        className={`${language === "pl" ? classes.active : ""}`}
      >
        pl
      </button>
    </div>
  );
}

export default LanguageSwitcher;
