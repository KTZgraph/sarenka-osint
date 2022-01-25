import { connectToDatabase, getAllDocuments } from "../../../lib/db";

const COLLECTION_NAME = "cve";

async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method no allowed" });
    return;
  }
  const { cveId } = req.query;

  const client = await connectToDatabase();
  const cve = await getAllDocuments(client, COLLECTION_NAME, {}, { id: cveId });
  client.close(); //pamietac o zzamykaniu poączenia z bazą

  const result = cve[0];
  if (result) {
    res.status(200).json(result);
    return;
  }

  res.status(404).json({ message: `${cveId} not found` });
}

export default handler;
