import SearchForm from "./search-form";
import classes from "./search.module.css";

function Search(props) {

  return (
    <div className={classes.search}>
      <h2>{props.title}</h2>
      <div className={classes.searchItems}>
        <SearchForm />
        {/* searchdata */}
      </div>
    </div>
  );
}


export default Search;
