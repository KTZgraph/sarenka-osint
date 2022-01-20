import { useState } from "react";
import classes from "./search-form.module.css";

function SearchForm() {
  const [enteredSearch, setEnteredSearch] = useState();
  const [hasData, setHasData] = useState(false);

  async function submitHandler(event){
    event.preventDefault();

    if(submitHandler){
      const response = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({ipAddress: enteredSearch}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json(); // też zwraca Promise
      console.log(data)
      if (!response.ok) {
        throw new Error(data.message || "Somethin wen wrong");
      }

      setHasData(true);
    }

  }

  return (
    <section className={classes.section}>
      <form className={classes.form} onClick={submitHandler}>
        <div className={classes.userSearch}>
          <label htmlFor="userSearch"></label>
          <input
            type="text"
            id="userSearch"
            placeholder="input ip address"
            required
            value={enteredSearch}
            onChange={(event) => setEnteredSearch(event.target.value)}
          />
        <button className={classes.action}>ikonka</button>

        </div>
      </form>

      <div>{setHasData}</div>
    </section>
  );
}

export default SearchForm;
