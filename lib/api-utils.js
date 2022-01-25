import {connectToDatabase, getAllDocuments} from './db';

export async function getAllCWEs() {
    // zwraca wszystkie słabosci CWE
  const client = await connectToDatabase();

  // sortowanie od ostatniego dodanego do bazy słabości cwe
  const cweList = await getAllDocuments(client, "cwe", { id: -1 });
  return cweList;
}


export async function getAllCVEs() {
    // zwraca wszystkie podatności CVE
  const client = await connectToDatabase();

  // sortowanie od ostatniego dodanego do bazy słabości cwe
  const cveList = await getAllDocuments(client, "cve", { id: -1 });
  return cveList;
}
