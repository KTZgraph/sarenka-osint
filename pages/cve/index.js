// zwraca listę podatności cve
import { getAllCVEs } from "../../lib/api-utils";
import CVEList from "../../components/cve/cve-list";

function CVEPage(props) {
  let { cveList } = props;
  cveList = JSON.parse(cveList);

  return <CVEList cveList={cveList} />;
}

export async function getStaticProps() {
  // pozwala na statyczne prerenderowanie podczas npm run build - optymailizacja danych które rzadko sie zmieniają
  const cveList = await getAllCVEs();

  return {
    props: {
      // obiekt
      cveList: JSON.stringify(cveList), //nie może obiektu zwrócić z getStaticProps
    },
    // odświeżanie co minutę, bo może przeciez nie być wszysktich w bazie
    revalidate: 60,
  };
}

export default CVEPage;
