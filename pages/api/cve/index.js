import cveList from "../../../data/cve-list";
import { connectToDatabase, insertDocument } from "../../../lib/db";

// zwraca listę wszystkich cve z bazy
async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: cveList });
  }

  if (req.method === "POST") {
      console.log("\n\n\n\n\nPOST")

    // // połączenie z bazą danych
    const client = await connectToDatabase();
    const db = client.db();

    //zwraca promsia
    const result = db.collection("cve").insertOne({
        id: "3",
        cweID: "CWE-94",
        description: "Windows Security Center API Remote Code Execution Vulnerability.",
        published: "01/11/2022",
        updated: "01/18/2022",
        vector: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
        baseScore: "9.8",
        status: "critical",
        hyperlink: "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2022-21874",
        source: "Microsoft Corporation"
    });


    res.status(201).json({ message: "CVE created!" });
    return;
  }

  res.status(200).json({ message: "dupa" });

}

export default handler;
