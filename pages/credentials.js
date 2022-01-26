// chroniony endpoint - tylko dla zalogowanych
import { getSession } from "next-auth/client"; //działa też po stronie serwera

import Credentials from "../components/credentials/credentials";

function CredentialsPage() {
  return <Credentials />;
}

// usuwanie wkurzającego mrugania jak przekierowuje niezalogowanego usera z /credentials -> /auth
export async function getServerSideProps(context) {
  // nie getStaticProps bo ma działać dla kazdego requesta
  const session = await getSession({ req: context.req }); //zwraca promisa, null jak not authenticated user

  if (!session) {
    // not-authenticated
    // notFound: true, // ale jednak nie chcę pokazywać 404
    return {
      redirect: {
        // przekierowanie niezalogowanego bez mrugania/flashing
        destination: "/auth",
        permament: false, //nie zawszer przekierowuje, tylko jeden raz jak niezalgowany
      },
    };
  }

  // zalogowany
  return {
    props: { session }, //przekazuję obiket sesji przez props
  };
}

export default CredentialsPage;
