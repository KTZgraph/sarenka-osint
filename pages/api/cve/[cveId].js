import { connectToDatabase, getAllDocuments } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method no allowed" });
    return;
  }
  const { cveId } = req.query;

  const client = await connectToDatabase();
  const cve = await getAllDocuments(client, "cve", {}, { id: cveId })[0];
  console.log("\n\n\n\n\n");
  console.log(cve);

  if (cve) {
    res.status(200).json(cve);
    return;
  }

  res.status(404).json({ message: "CVE not found" });
}

export default handler;
