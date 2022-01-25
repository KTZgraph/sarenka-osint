import {connectToDatabase, getAllDocuments} from '../../../lib/db';

async function handler(req, res){
    if (req.method !== 'GET'){
        res.status(405).json({ message: "Method no allowed" });
        return;
    }
    const {cveId} = req.query;
    // const client = await connectToDatabase();
    // const cveList = await getAllDocuments(client, "cve", {}, {});
    res.status(200).json({message: cveId})



}

export default handler;