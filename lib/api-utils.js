import { connectToDatabase, getAllDocuments, findOne } from "./db";

export async function getAllCWEs() {
  //zwraca listę obiektów
  // zwraca wszystkie słabosci CWE format JSON
  const client = await connectToDatabase();

  // sortowanie od ostatniego dodanego do bazy słabości cwe
  const cweList = await getAllDocuments(client, "cwe", { id: -1 });
  client.close();
  return cweList;
}

export async function getCWEById(cweId) {
  //zwraca obiekt
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
      { cweId: cweId }
    ); //zwraca tylko jeden

    result.cveList = cveList.map((cve) => cve.id); // dopisuję listę cve dla tej sąłbości
  }

  client.close();
  return result; //najżywej pusty obiekt
}

export async function getAllCVEs() {
  //zwraca obiekt
  // zwraca wszystkie podatności CVE
  const client = await connectToDatabase();

  // sortowanie od ostatniego dodanego do bazy słabości cwe
  const cveList = await getAllDocuments(client, "cve", { id: -1 });
  client.close();
  return cveList;
}

export async function getCVEById(cveId) {
  //zwraca obiekt
  // zwraca jedno CWE po id zwraca JSON
  const client = await connectToDatabase();
  // zwraca listę z tylko jednym obiektem
  const cve = await findOne(client, "cve", { id: cveId });

  client.close();
  return cve; //najżywej pusty obiekt
}
