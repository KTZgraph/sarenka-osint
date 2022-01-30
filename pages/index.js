
import Search from "../components/search/search";

function SearchPage(props) {

  return (
    <>
      <h1>Text for translations</h1>
      <h1>{props.locale}</h1>
      <h1>{props.locale}</h1>
      <h1>{props.locale}</h1>
      <h1>{props.locale}</h1>

      <Search />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale
    }
  }
}

export default SearchPage;