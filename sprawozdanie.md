#### Liczebość zespołu
1
#### Technologia wykonania projektu
Next.js, React, HTML, CSS  

#### Forma przekazania projektu
##### repozytorium
https://github.com/pawlaczyk/sarenka-osint
##### demo
https://sarenka-osint.vercel.app/

# Wariant I – aplikacja kliencka
## 1. Specyfikacja:
### i. określenie co najmniej czterech wymagań funkcjonalnych
- rejestracja - utworzenie unikalnego konta użytkownika z hasłem w postaci hashu (bcryptjs)
- logowanie na wczesniej utworozne konto (next-auth)
- konfiguracja - mozliwośc zmiany hasła użytkownika, zapis kluczy api do serwisu trzeciego
- mozliowśc przeglądania zbiorów danych CVE i CWE z bazy

### ii. określenie co najmniej dwóch wymagań pozafunkcjonalnych:
- bezpieczeństwo - ochrona podstron i endpointów przed niezalogowanym użytkownikiem
- tłumaczenie elementów strony (angielski, polski)

### iii. zdefiniowanie krótkiego opisu projektu:
Front end i demo dla aplikacji https://github.com/pawlaczyk/sarenka do rekonesansu pasywnego (OSINT). Umożliwia pobieranie danych z serwisów trzecich takich jak https://www.shodan.io/ które są dostępne z poziomu REST API, ale nie z interfejsu webowego. Zbieranie jak największej ilości danych podczas żmudnej fazy rekonesansu w jednym miejscu. 
Aplikacja jest w trakcie mergowania do głównego repozytorium.

### iv. wskazanie co najmniej dwóch potencjalnych odbiorców systemu
Około 350 osób https://github.com/pawlaczyk/sarenka/stargazers

### v. wskazanie co najmniej dwóch potencjalnych korzyści dla Użytkowników
- więcej informacji w czytelnej formie z serwisów trzecich przy użyciu tego samego darmowego konta
- możliowośc przeglądania zbirów danych CVE i CWE w jednym miejscu, gdzie dodatkowo istnieje pełna lista CVE należących do rodziny CWE (dane sa na dwóch osobnych serwisach https://cwe.mitre.org/data/definitions/775.html https://nvd.nist.gov/vuln/detail/CVE-2007-0897?cpeVersion=2.2)

### vi.określenie stosu technologicznego złożonego z co najmniej dwóch elementów
- Next.js
- React
- CSS, HTMl
- MongoDB

## 2. Warstwa funkcjonalna:
### i. realizacja wymagań funkcjonalnych:
- rejestracja: https://github.com/pawlaczyk/sarenka-osint/blob/master/components/auth/auth-form.js
- logowanie: https://github.com/pawlaczyk/sarenka-osint/blob/master/components/auth/auth-form.js
- konfiguracja: https://github.com/pawlaczyk/sarenka-osint/blob/master/components/credentials/credentials.js
- przegląd danych: 
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/cve/%5BcveId%5D.js
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/cve/index.js
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/cwe/%5BcweId%5D.js
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/cwe/index.js

### ii. realizacja wymagań pozafunkcjonalnych:
- bezpieczeństwo - ochrona podstron i endpointów przed niezalogowanym użytkownikiem
    - https://sarenka-osint.vercel.app/ (tylko dla zalogowanego użytkownika)
    - https://sarenka-osint.vercel.app/credentials/ (tylko dla zalogowanego użytkownika)
- tłumaczenie elementów strony
    - https://sarenka-osint.vercel.app/ (jezyk anglieski domyślny)
    - https://sarenka-osint.vercel.app/pl/ (jezyk polski)
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/cwe/cwe-details.js (przykładowa realizacja tłumaczenia)
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/i18n.json (konfiguracja tłumaczeń)
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/next.config.js (konfiguracja tłumaczeń)

## 3. Uwaga : w ramach poniższego kryterium proszę nie tworzyć części serwerowej
### i. implementacja komunikacji z co najmniej dwoma endpointami
- https://github.com/pawlaczyk/sarenka-osint/blob/master/components/credentials/credentials.js (zapis danych)
- https://github.com/pawlaczyk/sarenka-osint/blob/master/components/search/search-form.js (pobieranie danych)

### ii. (punkty dodatkowe) zamockowanie po stronie klienta co najmniej dwóch endpointów API:
- https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/api/auth/signup.js (rejestracja użytkownika)
- https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/api/cwe/%5BcweId%5D.js (pobieranie danych obiektu po Id)

## 4. Wykorzystanie dowolnego mechanizmu zachowania trwałości danych po stronie klienta
### i. implementacja, w sposób zgodny z założoną specyfikacją, dowolnie wybranego, jednego przykładu, takiego mechanizmu w ramach projektu
- JWT w ciastku sesyjnym dzięki bibliotece next-auth
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/api/auth/%5B...nextauth%5D.js

## 5. Wykorzystanie dowolnego mechanizmu routingu
### i. implementacja mechanizmu routingu dla co najmniej dwóch elementów nawigacyjnych
- Link z  "next/link"
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/layout/main-navigation.js (górne nawigacja aplikacji)
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/layout/main-menu.js (główne menu)
- useRouter z "next/router"
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/layout/language-switcher.js (przekierowanie dla jezyków)

## 6. Warstwa widoku
### i. responsywność co najmniej jednego ekranu dla co najmniej dwóch założonych progów
- responsywnosc ekranu logowania/rejestracji  (próg 1024px i 768px)
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/auth/auth-form.module.css

### ii. zastosowanie separacji logiki od widoku
- wydzielenie koponentów czysto reactowych do osobnego foldreu 
    - https://github.com/pawlaczyk/sarenka-osint/tree/master/components
- wydzielenie powtarzalnych elemntów czysto UX'owych
    - https://github.com/pawlaczyk/sarenka-osint/tree/master/components/layout
- wydzielenie funckji pomocniczych od komponentu
    - https://github.com/pawlaczyk/sarenka-osint/tree/master/lib


## 7.Stosowanie konwencji nazewniczych w programowaniu i formatowania kodu typowego dla wybranej technologii
- nazywanie komponentów Reacta z wielkich liter:
    - ```function ShodanForm(props) { ...``` 
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/credentials/shodan-form.js
- atrybuty obiektów camelCase
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/cwe/cwe-details.js ```{props.structure}```
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/search/search-form.js
    ```const response = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({ ipAddress: enteredSearch }),
        headers: {
        "Content-Type": "application/json",
        },
        }); 
    ```

- nazewnictwo metod w kompontentach zgodnie z konwencją reacta (końcówka Handler)
    -   ``` async function changePasswordHandler(passwordData) {...```
    -   ``` async function changeShodanCredentialsHandler(credentialsData)...```
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/credentials/credentials.js
- importowanie u góry bibliotek a później własnych plików:
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/components/auth/auth-form.js
    ```import { useState, useRef, useContext } from "react";
        import { signIn } from "next-auth/client"; // do logowania
        import { useRouter } from "next/router"; //do przekierownia
        
        import classes from "./auth-form.module.css";
        import { createUser } from "../../lib/auth-utils";
        import NotificationContext from "../../store/notification-context";``` 
- nazewnictwo funckji camelCase:
    - ```export async function connectToDatabase() { ...```
    - ```export async function insertDocument(client, collection, document) { ...```
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/lib/db.js
- nazywanie stałych z wielkich liter z separatorem "_":
    - ```const COLLECTION_NAME = "users";``` 
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/api/search.js
- nazywanie funckji enpoint "handler" zgodnie z Next.js
    - ```async function handler(req, res) {...`
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/api/auth/signup.js
    - https://github.com/pawlaczyk/sarenka-osint/blob/master/pages/api/cve/%5BcveId%5D.js
- formatowanie kodu (białe znaki, wcięcia, logiczne oddzielenia)
    - użycie wtyczki https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

##  8. Demonstracja specyfikacji oraz kodu źródłowego projektu wraz ze wskazaniem wyżej wymienionych elementów
- kod: https://github.com/pawlaczyk/sarenka-osint
- demo aplikacji: https://sarenka-osint.vercel.app/
- termin demonstracji?

## 9. Publikacja projektu na dowolnym serwerze innym niż lokalny (punkty dodatkowe)
#### https://sarenka-osint.vercel.app/
        