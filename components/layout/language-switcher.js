import classes from "./language-switcher.module.css";
import Link from "next/link";
import { i18n } from "next-i18next";

function LanguageSwitcher() {
  let language = 'en';
  return (
    <div>
      <button
        type="button"
        onClick={() => i18n.changeLanguage("en")}
        className={language === "en" ? "is-active" : ""}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage("pl")}
        className={language === "pl" ? "is-active" : ""}
      >
        PL
      </button>
    </div>
  );
}

export default LanguageSwitcher;
