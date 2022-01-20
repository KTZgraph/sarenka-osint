// https://developer.shodan.io/api

export async function searchbyIP(ipAddress, apiKey) { /* TODO */
  /* https://api.shodan.io/shodan/host/{ip}?key={YOUR_API_KEY}
   */
  const response = await fetch(
    `https://api.shodan.io/shodan/host/${ipAddress}?key=${apiKey}`
  );
  const data = await response.json();
  return data;
}
