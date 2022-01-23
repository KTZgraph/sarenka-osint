import cveList from '../../../data/cve-list';

// zwraca listę wszystkich cve z bazy
async function handler(req, res) {
    if (req.method === 'GET'){
        res.status(200).json({message: cveList})
    }
}

export default handler;