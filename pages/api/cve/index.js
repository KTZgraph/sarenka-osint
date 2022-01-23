// import cveList from "../../../data/cve-list";
import {
  connectToDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../lib/db";

async function handler(req, res) {
  if (req.method === "GET") {
    // zwraca listę wszystkich cve z bazy
    // // połączenie z bazą danych
    const client = await connectToDatabase();

    const cveList = await getAllDocuments(client, "cve", { id: -1 });

    res.status(200).json(cveList);
    client.close();
    return;
  }

  if (req.method === "POST") {
    // dodaje cve do bazy
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

    // dodanie dokumentu do bazy danych
    const result = await insertDocument(client, "cve", {
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

    console.log(result);
    // pamiętać o zamykaniu bazy

    res.status(201).json({ message: "CVE created!" });
    client.close();
    return;
  }

  res.status(405).json({ message: "Method no allowed" });
}

export default handler;
