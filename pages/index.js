import { useRouter } from "next/router";
import { Fragment } from "react";
import Layout from "../components/layout";

function HomePage(props) {
  let router = useRouter();

  //dobre do prerenderowania stron np we własnym CMSie
  // let greeting =
  //   router.locale === "en-US"
  //     ? "Hello there"
  //     : router.locale === "pl"
  //     ? "Witajcie"
  //     : "";

  return (
    <Layout>
      {/* <h1>{greeting}</h1> */}
      <h1>{props.greeting}</h1>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  //jezyk domyślny sotajemy w propsach w obieckcie context
  let greeting =
    locale === "en-US" ? "Hello there" : locale === "pl" ? "Witajcie" : "";

  return {
    props: { greeting },
  };
}

export default HomePage;
