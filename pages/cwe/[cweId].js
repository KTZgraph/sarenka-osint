import CWEDetails from "../../components/cwe/cwe-details";
import { getAllCWEs, getCWEById } from "../../lib/api-utils";
import Spinner from "../../components/ui/spinner";

function CWEDetailPage(props) {
  const cwe = JSON.parse(props.cwe); //MUSI być obiekt z powrotem

  if (!cwe) {
    // jeszcze nie pobrało danych
    return <Spinner />;
  }

  //tylko typy proste przekazywac do komponentu - jeśli cały obiekt, to są warningi
  return (
    <CWEDetails
      id={cwe.id}
      name={cwe.name}
      abstraction={cwe.abstraction}
      structure={cwe.structure}
      status={cwe.status}
      description={cwe.description}
      extended_description={cwe.extended_description}
      cveList={cwe.cveList}
    />
  );
}

export async function getStaticProps(context) {
  const cweId = context.params.cweId;
  const cwe = await getCWEById(cweId);

  return {
    props: {
      // może zwrócić tylko jsona
      cwe: JSON.stringify(cwe),
      cweId,
    },
  };
}

export async function getStaticPaths() {
  const cwes = await getAllCWEs(); // raczej się zmieniają i są ogladane tylko przyszłe wydarzenia

  // https://nextjs.org/docs/advanced-features/i18n-routing  trzeba tworzyć sciezki
  const pathsEN = cwes.map((cwe) => ({
    params: { cweId: cwe.id },
    locale: "en",
  }));
  const pathsPL = cwes.map((cwe) => ({
    params: { cweId: cwe.id },
    locale: "pl",
  }));

  const pathsAll = pathsEN.concat(pathsPL); //konkatencja list

  return {
    paths: pathsAll,
    fallback: true,
  };
}

export default CWEDetailPage;
