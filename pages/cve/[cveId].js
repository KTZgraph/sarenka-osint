import CVEDetails from "../../components/cve/cve-details";
import { getAllCVEs, getCVEById } from "../../lib/api-utils";
import Spinner from "../../components/ui/spinner";

function CVEDetailPage(props) {
  const cve = JSON.parse(props.cve);

  if (!cve) {
    return <Spinner />;
  }

  return (
    <CVEDetails
      id={cve.id}
      description={cve.description}
      published={cve.published}
      updated={cve.updated}
      vector={cve.vector}
      baseScore={cve.baseScore}
      status={cve.status}
      hyperlink={cve.hyperlink}
      source={cve.source}
      cweID={cve.cweID}
    />
  );
}

export async function getStaticProps(context) {
  const cveId = context.params.cveId;
  const cve = await getCVEById(cveId);

  return {
    props: {
      // może zwrócić tylko jsona
      cve: JSON.stringify(cve),
    },
  };
}

export async function getStaticPaths() {
  const cves = await getAllCVEs(); // raczej się zmieniają i są ogladane tylko przyszłe wydarzenia

  const paths = cves.map((cve) => ({ params: { cveId: cve.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default CVEDetailPage;
