import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Search from "../components/search/search";

function SearchPage(props) {
  const {t} = useTranslation();

  return (
    <>
      <h1>Text for translations</h1>
      <h1>{t('home:welcome_msg')}</h1>

      <Search />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

export default SearchPage;
