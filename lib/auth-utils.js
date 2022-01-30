export async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    // endpointy tylko jsona NIE obiekty przyjmują
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json(); //zwraca Promisa
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}
