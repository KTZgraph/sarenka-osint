// pageProps.session jest ustawione w
// pages/credentials - optymalizacja nadmiarowych jakiś requestów - dobra praktyka
// reszta manualnie może sprawdzić sesję
import Head from "next/head";
import { Provider } from "next-auth/client";

import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { NotificationContextProvider } from "../store/notification-context";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <NotificationContextProvider>
        {/* layout opakuje całośc wizualnego kontentu, to on może mieć notyfikacje */}
        <Layout>
          <Head>
            <title>Sarenka</title>
            <meta name="description" content="sarenka osint" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </Provider>
  );
}

export default MyApp;
