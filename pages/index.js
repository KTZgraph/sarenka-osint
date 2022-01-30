import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Search from "../components/search/search";

function SearchPage() {
  const {t} = useTranslation();

  return (
    <>
      {/* <h1>{t('home:welcome_msg')}</h1> */}
      <Search title={t('home:search')}/>
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
