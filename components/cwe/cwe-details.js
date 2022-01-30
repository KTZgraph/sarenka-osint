import classes from "./cwe-details.module.css";
import Button from '../../components/ui/button';

function CWEDetails(props) {
  // const cwe = props.cwe;

  return (
    <div className={classes.content}>
      <h2>{props.id}</h2>
      <p>{props.name}</p>
      <p>{props.abstraction}</p>
      <p>{props.structure}</p>
      <p>{props.status}</p>
      <p>{props.description}</p>
      <p>{props.extended_description}</p>

      <ul className={classes.actions}>
        {props.cveList.map((cveId) => (
          <li key={cveId}><Button link={`/cve/${cveId}`}>{cveId}</Button></li>
        ))}
      </ul>

      
    </div>
  );
}

export default CWEDetails;
