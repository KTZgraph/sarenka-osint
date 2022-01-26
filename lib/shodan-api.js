// https://developer.shodan.io/api

const BASE_URL = "https://api.shodan.io/shodan";

export async function searchbyIP(ipAddress, apiKey) {
  /* TODO */
  /* https://api.shodan.io/shodan/host/{ip}?key={YOUR_API_KEY}
   */


  // pobieranie credentiali dla usera z bazy 




    console.log("1")
    const response = await fetch(`${BASE_URL}/host/${ipAddress}?key=${apiKey}`);
    if(response.status === 401){
      throw new Error("Can't get data - user credentials are invalid")
    }

    const data = await response.json();

    return data;

  

}
