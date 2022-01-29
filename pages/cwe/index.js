// zwraca listę cwe
import { getAllCWEs } from "../../lib/api-utils";
import CWEList from "../../components/cwe/cwe-list";
import Spinner from "../../components/ui/spinner";


function CWEPage(props) {
  let { cweList } = props;
  cweList = JSON.parse(cweList);
// przekazać osobno propsy nie obiekt - Warning: Only strings and numbers are supported as <option> children.
//TODO
  return <CWEList cweList={cweList} />;
}

export async function getStaticProps() {
  // pozwala na statyczne prerenderowanie podczas npm run build - optymailizacja danych które rzadko sie zmieniają
  const cweList = await getAllCWEs(); //zwraca jsona

  return {
    props: {
      // obiekt
      cweList: JSON.stringify(cweList), //nie może obiektu musi JSON zwrócić z getStaticProps
    },
    // odświeżanie co 24h na produkcji
    revalidate: 86400, // co 24h
  };
}

export default CWEPage;
