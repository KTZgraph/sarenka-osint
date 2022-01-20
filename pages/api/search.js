import {searchbyIP} from '../../lib/shodan-api';

// szuka hostów po adresie ip w shodanie
async function handler(req, res){
    if (req.method !== 'POST'){
        // https://jchost.pl/blog/blad-405-method-not-allowed/
        res.status(405).json({message: 'Method not allowed'})
        // przy metodzie post NIE MOZE MIEC BODY
        return;
    }

    // adress ip z frontu z zapytania
    const {ipAddress} = req.body;
    console.log("ipAddress")
    console.log(ipAddress)

    
    //klucz z bazy użytkownika
    const apiKey="klucz do api"; 

    try{
        const response = await searchbyIP("8.8.8.8", apiKey);
        res.status(200).json(response);

    }catch(error){
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
        // 422 Unprocessable Entity - user dał nie działajace klucze
        res.status(422).json({message: error.message})
    }
  }
  
  export default handler;