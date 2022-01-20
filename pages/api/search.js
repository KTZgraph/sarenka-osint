import {searchbyIP} from '../../lib/shodan-api';

async function handler(req, res){
    // szuka hostów po adresie ip w shodanie
    console.log("TUUUUUUUUUU")
    const apiKey="klucz do api";
    try{
        const response = await searchbyIP("8.8.8.8", apiKey);
        res.status(200).json(response);

    }catch(error){
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
        // 422 Unprocessable Entity - user dał nie działajace klucze
        res.status(422).json({message: error.message})
        return;
    }
  }
  
  export default handler;