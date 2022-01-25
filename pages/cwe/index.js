// zwraca listę cwe
import { getAllCWEs } from "../../lib/api-utils";
import CWEList from "../../components/cwe/cwe-list";

function CWEPage(props) {
  let { cweList } = props;
  cweList = JSON.parse(cweList);

  return <CWEList cweList={cweList} />;
}

export async function getStaticProps() {
  // pozwala na statyczne prerenderowanie podczas npm run build - optymailizacja danych które rzadko sie zmieniają
  const cweList = await getAllCWEs();

  return {
    props: {
      // obiekt
      cweList: JSON.stringify(cweList), //nie może obiektu zwrócić z getStaticProps
    },
    // odświeżanie co minutę, bo może przeciez nie być wszysktich
    revalidate: 60,
  };
}

export default CWEPage;
