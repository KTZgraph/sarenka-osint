import cveList from "../../../data/cve-list";
import { connectToDatabase, insertDocument } from "../../../lib/db";

// zwraca listę wszystkich cve z bazy
async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: cveList });
  }

  if (req.method === "POST") {
      console.log("\n\n\n\n\nPOST")
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
    const result = insertDocument(client, "cve", {
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
    })


    console.log(result)

    res.status(201).json({ message: "CVE created!" });
    return;
  }

  res.status(200).json({ message: "dupa" });

}

export default handler;
