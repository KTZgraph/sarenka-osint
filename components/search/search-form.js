import { useRef } from "react";
import classes from "./search-form.module.css";
import ArrowRightIcon from "../icons/arrow-right-icon";

function SearchForm() {
  const searchRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredSearch = searchRef.current.value;

    // walidacja po stronie klienta
    if (!enteredSearch || enteredSearch.trim() === "") {
      console.log("ip address is empty");
      return;
    }

    const response = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ ipAddress: enteredSearch }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json(); // też zwraca Promise
    console.log(data);

    if (!response.ok) {
      // throw new Error(data.message || "Something went wrong");
      console.log(response.error | "somethin went wrong");
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
            ref={searchRef}
          />
          <button className={classes.action}>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
