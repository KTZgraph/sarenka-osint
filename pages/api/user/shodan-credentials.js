// chroniony endpoint - tylko zalogowany user moze zmienić credentiale do api
// domyślnie shodanUsername i shodanApiKey są puste podczas rejestacji
import { getSession } from "next-auth/client"; //dziala tez po stronie serwera
import { connectToDatabase, findOne, updateOne } from "../../../lib/db";

const COLLECTION_NAME = "users";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    res.status(405).json({ message: "Method not allowed!" });
    return;
  }

  // tylko dla zalogowanego usera
  const session = await getSession({ req: req });
  if (!session) {
    // notauthenticated user
    // http 401 authentication is missing
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  // email usera z sesji
  const userEmail = session.user.email;

  // dane z frontu
  const shodanUsername = req.body.shodanUsername;
  const shodanApiKey = req.body.shodanApiKey;

  const client = await connectToDatabase();
  const user = await findOne(client, COLLECTION_NAME, { email: userEmail });
  if (!user) {
    //jak nie ma useraz w bazie, chcoiaż email jest z sesji to coś jest ewidentnie nie tak
    res.status(404).json({ message: "User not found" });
    client.close(); //pamietać o zamykaniu połączenia z bazą
    return;
  }

  //walidacja danych czy nie puste
  if (
    !shodanUsername ||
    shodanUsername.trim() === "" ||
    !shodanApiKey ||
    shodanApiKey.trim() === ""
  ) {
    res
      .status(422)
      .json({ message: "Inalid credentials for https://www.shodan.io/" });
    client.close();
    return;
  }

  const result = await updateOne(
    client,
    COLLECTION_NAME,
    { email: userEmail },
    { shodanUsername: shodanUsername, shodanApiKey: shodanApiKey }
  );

  console.log(result);
  client.close();
  res.status(200).json({ message: "Credentials for shodan saved" });
}


export default handler;