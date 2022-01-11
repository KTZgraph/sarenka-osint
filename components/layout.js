import Head from "next/head";
import Link from "next/link";

function Layout({ children }) {
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
      </footer>
    </div>
  );
}

export default Layout;