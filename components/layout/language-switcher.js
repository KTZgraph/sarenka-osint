import { useRouter } from "next/router";

function LanguageSwitcher(){
    let router = useRouter();

    return (
        <div className={classes.languages}>
        <select>
          {router.locales.map((locale) => (
            <option key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </option>
          ))}
        </select>

        {/* <select>
          <option>
            <span>EN</span>
          </option>
          <option>
            <span>PL</span>
          </option>
        </select> */}
      </div>
    )
}

export default LanguageSwitcher;