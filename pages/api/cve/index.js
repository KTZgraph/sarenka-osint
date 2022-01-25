// import cveList from "../../../data/cve-list";
import {
  connectToDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../lib/db";

const COLLECTION_NAME = "cve";

async function handler(req, res) {
  if (req.method === "GET") {
    // zwraca listę wszystkich cve z bazy
    // // połączenie z bazą danych
    const client = await connectToDatabase();

    const cveList = await getAllDocuments(client, COLLECTION_NAME, { id: -1 });

    res.status(200).json(cveList);
    client.close();
    return;
  }

  if (req.method === "POST") {
    // dodaje cve do bazy, POSTMAN później skrypt jak w Pythonie
    const {
      id,
      cweID,
      description,
      published,
      updated,
      vector,
      baseScore,
      status,
      hyperlink,
      source,
    } = req.body;

    // // połączenie z bazą danych
    const client = await connectToDatabase();

    // jeśli dokument o takim id jest w bazie to nie dodadawaj
    const existingCVE = await getAllDocuments(client, COLLECTION_NAME, {}, { id: id });
    if (existingCVE) {
      // 409 Conflict albo 400 bad request
      //   https://stackoverflow.com/questions/3825990/http-response-code-for-post-when-resource-already-exists
      client.close(); //pamietac o zzamykaniu poączenia z bazą
      res.status(409).json({ message: `${id} already in database` });
      return;
    }

    // dodanie dokumentu do bazy danych
    const result = await insertDocument(client, COLLECTION_NAME, {
      id,
      cweID,
      description,
      published,
      updated,
      vector,
      baseScore,
      status,
      hyperlink,
      source,
    });

    // pamiętać o zamykaniu bazy
    client.close();
    res.status(201).json({ message: `${id} created with id ${result.insertedId}!` });
    return;
  }

  res.status(405).json({ message: "Method no allowed!" });
}

export default handler;
