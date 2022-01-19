import { useState } from "react";
import classes from "./search-form.module.css";

function SearchForm() {
  const [enteredSearch, setEnteredSearch] = useState();

  return (
    <section className={classes.section}>
      <form className={classes.form}>
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
    </section>
  );
}

export default SearchForm;
