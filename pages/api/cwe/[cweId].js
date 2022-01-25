import { connectToDatabase, getAllDocuments } from "../../../lib/db";

const COLLECTION_NAME = "cwe";

async function handler(req, res) {
  // pobieranie pojedynczego CWE z bazy + lista podatnosci CVe dla niego
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method no allowed" });
    return;
  }
  const cweId = req.query.cweId;

  const client = await connectToDatabase();
  const cwe = await getAllDocuments(client, "cwe", {}, { id: cweId });

  const result = cwe[0];
  if (result) {
    // dopisuję listę obiketów cve
    const cveList = await getAllDocuments(client, "cve", {}, { cweID: cweId });
    // mapuję żeby był atylko lista idków CWE
    result.cveList = cveList.map(cve => cve.id);
    res.status(200).json(result);
    client.close(); //pamietac o zzamykaniu poączenia z bazą

    return;
  }

  client.close(); //pamietac o zzamykaniu poączenia z bazą
  res.status(404).json({ message: `${cweId} not found` });
}

export default handler;
