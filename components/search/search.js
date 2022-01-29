import useTranslation from "next-translate/useTranslation";

import SearchForm from "./search-form";
import classes from "./search.module.css";


function Search() {
  let {t} = useTranslation()

  return (
    <div className={classes.search}>
      <h2>{t('search:search')}</h2>
      <p>{t('search:introduction', {name:'Losoweimię', age:99999999999})}</p>
      <div className={classes.searchItems}>
        <SearchForm />
        {/* searchdata */}
      </div>
    </div>
  );
}

export default Search;
