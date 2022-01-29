import useTranslation from "next-translate/useTranslation";
import Search from "../components/search/search";

function SearchPage() {
  let {t} = useTranslation()
  return (
    <>
      <h1>{t('common:greeting')}</h1>
      <Search />
    </>
  );
}

export default SearchPage;
