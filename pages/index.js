import useTranslation from 'next-translate/useTranslation'


function HomePage(props) {
  //dobre do prerenderowania stron np we własnym CMSie
  let {t} = useTranslation(); //hook  // t to funckja która pomaga tłumaczyć stringi

  return (
      <h1>{t('common:greeting')}</h1>
  );
}

// export async function getStaticProps({ locale }) {
//   //jezyk domyślny sotajemy w propsach w obieckcie context
//   let greeting =
//     locale === "en-US" ? "Hello there" : locale === "pl" ? "Witajcie" : "";

//   return {
//     props: { greeting },
//   };
// }

export default HomePage;
