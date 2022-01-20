export async function createUser(username, password, passwordConfirmation) {
  if (password !== passwordConfirmation) {
    throw new Error("passwords don't match");
  }

  //   api sprawdza czy użytkownik o tej nazwie już istnieje w bazie
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json(); // też zwraca Promise
  if (!response.ok) {
    throw new Error(data.message || "Somethin went wrong");
  }
}

export async function loginUser(username, password) {
  console.log("Logowanie");
//   tutaj już next-auth
}
