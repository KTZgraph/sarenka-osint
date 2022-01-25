import Spinner from "../ui/spinner";
import CWEItem from "./cwe-item";
import classes from "./cwe-list.module.css";

function CWEList(props) {
  const { cweList } = props;

  if (!cweList) {
    return <Spinner />;
  }

  return (
    <section className={classes.section}>
      <h2>CWE List</h2>

      <ul className={classes.list}>
        {cweList.map((cwe) => (
          <CWEItem key={cwe.id}
          cwe={cwe}
         />
        ))}
      </ul>
    </section>
  );
}

export default CWEList;
