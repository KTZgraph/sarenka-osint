import {
  connectToDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../lib/db";

const COLLECTION_NAME = "cwe";

async function handler(req, res) {
  if (req.method === "GET") {
    // zwraca całą listę obiektów cwe z bazy
    const client = await connectToDatabase();

    // sortowanie od ostatniego dodanego do bazy słabości cwe
    const cweList = await getAllDocuments(client, COLLECTION_NAME, { id: -1 });

    res.status(200).json(cweList);
    client.close(); //pamietac o zzamykaniu poączenia z bazą
    return;
  }
  if (req.method === "POST") {
    //   dodawanie CWE do bazy - jakiś skrypt/POSTMA?N do wypełnienia bazy
    const {
      id,
      name,
      abstraction,
      structure,
      status,
      description,
      extended_description,
    } = req.body;

    const client = await connectToDatabase();

    // nie dodawać cwe jeśli jest już w bazie
    const existingCWE = await getAllDocuments(
      client,
      COLLECTION_NAME,
      {},
      { id: id }
    );

    if (existingCWE[0]) {
      // 409 Conflict albo 400 bad request; 409 mówi ciut więcej
      res.status(409).json({ message: `${id} already in database` });
      // pamiętać o zamykaniu bazy
      client.close();
      return;
    }

    const result = await insertDocument(client, COLLECTION_NAME, {
      id,
      name,
      abstraction,
      structure,
      status,
      description,
      extended_description,
    });

    res.status(201).json({ message: `${id} created, database id: ${result.insertedId}` });
    client.close(); //pamietac o zzamykaniu poączenia z bazą
    return;
  }

  res.status(405).json({ message: "Method not allowed" });
}

export default handler;
