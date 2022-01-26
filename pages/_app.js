// pageProps.session jest ustawione w
// pages/credentials - optymalizacja nadmiarowych jakiś requestów - dobra praktyka
// reszta manualnie może sprawdzić sesję
import { Provider } from "next-auth/client";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
