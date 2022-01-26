// chroniony endpoint - tylko zalogowany user moze zmienic swoje hasło
import { getSession } from "next-auth/client"; //dziala tez po stronie serwera
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { connectToDatabase, findOne, updateOne } from "../../../lib/db";

const COLLECTION_NAME = "users";

async function handler(req, res) {
  // zmiana hasła POST, PUT, PATCH ale ja sobie biorę (subiektywnie) PATCH bo zmieniam istniejące dane
  if (req.method !== "PATCH") {
    res.status(405).json({ message: "Method not allowed!" });
    return;
  }

  //   sprawdza obiekt req i waliduje pod maską czy jest cookie z tokenetem JWT
  const session = await getSession({ req: req }); //zwraca promisa; obiket albo null gdy niezalogowany

  if (!session) {
    // notauthenticated user
    // http 401 authentication is missing
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  //   dane z sesji
  const userEmail = session.user.email;
  //   danez requesta z frontu
  const oldPassword = req.body.oldPassword; //hasło stare z frontu
  const newPassword = req.body.newPassword; //hasło nowe z frontu

  const client = await connectToDatabase();
  const user = await findOne(client, COLLECTION_NAME, { email: userEmail });

  if (!user) {
    //jak nie ma useraz w bazie, chcoiaż email jest z sesji to coś jest ewidentnie nie tak
    res.status(404).json({ message: "User not found" });
    client.close(); //pamietać o zamykaniu połączenia z bazą
    return;
  }

  //   weryfikacja haseł
  const currentPassword = user.password; //hasło z bazy
  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    //stare hasło z frontu jest różne od tego z bazy
    // HTTP 403 Forbidden https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
    res.status(403).json("Passwords don't match.");
    client.close(); //pamietać o zamykaniu połączenia z bazą
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  const result = await updateOne(
    client,
    COLLECTION_NAME,
    { email: userEmail },
    { password: hashedPassword }
  );

  console.log(result)
  client.close();
  res.status(200).json({message: 'Password updated'});
}

export default handler;
