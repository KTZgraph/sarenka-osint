import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import Search from "../components/search/search";

function SearchPage() {
  let { t } = useTranslation();

  return (
    <>
      <Head>
        {/* komponent na metadane np title */}
        <title>Sarenka | {t("common:search")} </title>
        <meta name="keywords" content="shodan" />
      </Head>
      <Search />
    </>
  );
}

export default SearchPage;
