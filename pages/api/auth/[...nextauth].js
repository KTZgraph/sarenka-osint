// ważna nazwa - biblioteka tego wymaga
// https://next-auth.js.org/getting-started/rest-api
// Providers.Credentials - nie korzystam z żadnych trzecich serwisów typu github/google etc
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

// exetuce function, nowy hndler zwraca
export default NextAuth({
  // session opcja żeby ustalić authentykację - tutaj żeby był JWT, JWT wymagane jak Credentials sa Providerem
  session: {
    // domyslnie jest jwt, ale zrobienie tego explicit jest okejka
    jwt: true,
  },

  // obiekt konfiguracji
  providers: [
    Providers.Credentials({
      //obiekt konfigracji providera ktorego wybrałam, nie konfigurę credentials: {emai, password} bo mam swoją stronę z login
      async authorize(credentials) {
        //   metoda gdy nextjs dostaje request logowania - moja logika
        const client = await connectToDatabase();

        // sprawdzam czy taki user już istenioje w bazie
        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          // brak usera w bazie
          client.close(); //pamietac o zamykaniu bazy
          throw new Error("User not found!");
          //   w przypadku rzucenia wyjątku authorize odrzuci promisa i przekieruje na inną stronę
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          // hasło od usera nie zgadza się z tym w bazie
          throw new Error("Invalid email or password - could not log in!");
        }

        client.close(); //pamietac o zamykaniu bazy
        // zwracam obiekt - to pozwala NextAuth stwsierdzić, że autoryzacja się powiodła
        // obiket będzie encodec w JSON web token JWT
        // NIE ZWRACAM HASLA, nawet zahashowanego NIE DAWAC DO KLIENTA
        return { email: user.email };
      },
    }),
  ],
});
