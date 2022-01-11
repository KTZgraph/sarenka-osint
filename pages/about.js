import useTranslation from "next-translate/useTranslation";


function AboutPage() {
  let { t } = useTranslation(); //hook

  return (
    <>
      <h1>{t("about:title")}</h1>;
      <p>{t("about:introduction", { name: "Kunegudna", age: 9999999 })}</p>
    </>
  );
}

export default AboutPage;
