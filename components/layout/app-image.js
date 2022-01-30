import Image from "next/image";
import classes from "./app-image.module.css";
import Link from "next/link";

function AppImage(props) {
    console.log("\n\n\n\n\n")
    console.log(props)
  return (
    <Link href="/">
      <a href="#" className={classes.logo}>
        <div className={classes.card}>
          <div className={classes.cardImg}>
            <Image
              src="/logo.png"
              className="admin-image"
              alt="Admin Image"
              width={40}
              height={40}
            />
          </div>
          <div className={classes.cardBody}>
            <h2 className="card-title">SARENKA</h2>
            {/* warunkowo jak user zalogowany */}
            {props.userEmail && <p className="card-subtitle">{props.userEmail}</p>}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default AppImage;
