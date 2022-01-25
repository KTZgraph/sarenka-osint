import { connectToDatabase, getAllDocuments } from "./db";

export async function getAllCWEs() {
  // zwraca wszystkie słabosci CWE format JSON
  const client = await connectToDatabase();

  // sortowanie od ostatniego dodanego do bazy słabości cwe
  const cweList = await getAllDocuments(client, "cwe", { id: -1 });
  client.close();
  return JSON.stringify(cweList);
}

export async function getCWEById(cweId) {
  // zwraca jedno CWE po id zwraca JSON
  const client = await connectToDatabase();
  // zwraca listę z tylko jednym obiektem
  const cwe = await getAllDocuments(client, "cwe", {}, { id: cweId });

  const result = cwe[0]; //najwyżej pusty obiekt
  if (result) {
    let cveList = await getAllDocuments(
      client,
      "cve",
      { _id: -1 },
      { cweID: cweId }
    ); //zwraca tylko jeden

    // cveList = cveList.map(cve => cve.id)
    // mapuję żeby był atylko lista idków CWE
    // console.log("\n\n\n\n\n");
    // console.log(cveList.length);
    result.cveList = cveList.map((cve) => cve.id); // dopisuję listę cve dla tej sąłbości
  }

  client.close();
  return JSON.stringify(result); //najżywej pusty obiekt
}

export async function getAllCVEs() {
  // zwraca wszystkie podatności CVE
  const client = await connectToDatabase();

  // sortowanie od ostatniego dodanego do bazy słabości cwe
  const cveList = await getAllDocuments(client, "cve", { id: -1 });
  client.close();
  //format JSON
  return JSON.stringify(cveList);
}
