import classes from "./cwe-details.module.css";
import Button from '../../components/ui/button';

function CWEDetails(props) {
  const cwe = props.cwe;

  return (
    <div className={classes.details}>
      <h2>{cwe.id}</h2>
      <p>{cwe.name}</p>
      <p>{cwe.abstraction}</p>
      <p>{cwe.structure}</p>
      <p>{cwe.status}</p>
      <p>{cwe.description}</p>
      <p>{cwe.extended_description}</p>

      <ul className={classes.actions}>
        {cwe.cveList.map((cveId) => (
          <li key={cveId}><Button >{cveId}</Button></li>
        ))}
      </ul>
    </div>
  );
}

export default CWEDetails;
