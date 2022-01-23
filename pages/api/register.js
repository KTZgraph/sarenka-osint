// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {hashPassword, verifyPassword} from '../../lib/crypto-utils';
import {connectToDatabase} from '../../lib/crypto-utils';

async function handler(req, res){
  // obsługa tylko metody POST
  // 405 Method Not Allowed

  if(req.method !== 'POST'){
    res.status(405).json('Method GET is not allowed');
    return;
  }
}

export default handler;