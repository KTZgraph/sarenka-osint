import Spinner from "../../components/ui/spinner";
import { getCWEById, getAllCWEs } from "../../lib/api-utils";
import CWEDetails from "../../components/cwe/cwe-details";

function CWEDetailPage(props) {
  let cwe = props.selectedCWE;
  cwe = JSON.parse(cwe);

  // walidacja danych
  if (!cwe) {
    return <Spinner />;
  }

  return (
      <CWEDetails cwe={cwe} />
  );
}

export async function getStaticProps(context) {
  // optymalizacja prerenderowanie gdzie sie da
  const cweId = context.params.cweId;
  const cwe = await getCWEById(cweId);
  

  return {
    notFound: true, // żeby 404 wyświetlił na froncie
    props: {
      selectedCWE: cwe,
    },
  };
}

export async function getStaticPaths() {
  // instancje dla których trzeba wyrenderować wczesniej strony
  let cwes = await getAllCWEs(); // raczej się zmieniają i są ogladane tylko przyszłe wydarzenia
  cwes = JSON.parse(cwes);
  //to tez w konsekwnecji sprawia, ze niektóe wydarzenia nie będę prerenderowane

  const paths = cwes.map((cwe) => ({ params: { cweId: cwe.id } }));

  return {
    paths: paths,
    // będzie starała się dynamcicnzie renderowac strony
    fallback: "blocking", // jest wiecej stron niż te które się wyrenderowany
    //block nextjs niż nie srerwuje dopóki nie wyrenederujemy strony; trochę dłuzej to trwa ale zwraca już całą stronę
  };
}

export default CWEDetailPage;
