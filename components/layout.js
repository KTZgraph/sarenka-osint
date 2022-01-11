import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function Layout({ children }) {
  let router = useRouter();

  return (
    <div>
      <Head>
        <title>i18n Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p> 2022</p>
        {/* w footerze opcja zmiany jezyków, zeby  nie trzeba było z urla wybierać */}
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
                {/* router.asPath żeby po kliknięciu w link nie zostać przekierowanym do np homePage ale żeby zostać na aktualnej stronie */}
                {/* router.asPath - currentPath in your browser */}
              <Link href={router.asPath} locale={locale}> 
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Layout;
