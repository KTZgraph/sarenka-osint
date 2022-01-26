// chroniony endpoint - tylko zalogowany user moze zmienic swoje hasło
import { getSession } from "next-auth/client"; //dziala tez po stronie serwera

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

  
}

export default handler;
