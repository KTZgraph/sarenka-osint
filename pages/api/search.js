// chroniony endpoint tylko dla zalogowanych użytkowników
import { getSession } from "next-auth/client"; //dziala tez po stronie serwera

import { connectToDatabase, findOne } from "../../lib/db";
import { searchbyIP } from "../../lib/shodan-api";

const COLLECTION_NAME = "users";

// szuka hostów po adresie ip w shodanie
async function handler(req, res) {
  if (req.method !== "POST") {
    // https://jchost.pl/blog/blad-405-method-not-allowed/
    res.status(405).json({ message: "Method not allowed" });
    // przy metodzie post NIE MOZE MIEC BODY
    return;
  }

  // tylko dla zalogowanych użytkowników
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  // email usera z sesji
  const userEmail = session.user.email;

  //   wyciągam credentiale z bazy
  const client = await connectToDatabase();
  const user = await findOne(client, COLLECTION_NAME, { email: userEmail });

  if (!user) {
    //jak nie ma useraz w bazie, chcoiaż email jest z sesji to coś jest ewidentnie nie tak
    res.status(404).json({ message: "User not found" });
    client.close(); //pamietać o zamykaniu połączenia z bazą
    return;
  }

  const username = user.shodanUsername;
  const apiKey = user.shodanApiKey;

  // tu już mogę zamknac połączenie z bazą
  client.close(); //pamietać o zamykaniu połączenia z bazą

  if (!username || !apiKey) {
    // zalogowany ale brak credentiali
    res
      .status(403)
      .json({ message: "Invalid credentials for https://www.shodan.io/" });
    return;
  }

  // adress ip z frontu z zapytania
  const { ipAddress } = req.body;
  if (!ipAddress) {
    res.status(422).json({ message: "Invalid input - ip address is empty" });
    return;
  }

  try {
    const response = await searchbyIP(ipAddress, apiKey);
    res.status(200).json(response);
  } catch (error) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
    // 422 Unprocessable Entity - user dał nie działajace klucze
    res.status(422).json({ message: error.message });
  }
}

export default handler;
