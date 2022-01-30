import Image from 'next/image';
import classes from './user-image.module.css';
import Link from "next/link";

const UserImage = () => {
    return (
            <Link href="/">
            <a href="#" className={classes.logo}>
            <div className={classes.card}>

            <div className={classes.cardImg}>
                <Image src="/logo.png" className="admin-image" alt="Admin Image" width={40} height={40}/>
            </div>
            <div className={classes.cardBody}>
                <h2 className="card-title">SARENKA</h2>
                <p className="card-subtitle">Administrator</p>
            </div>    
        </div>
        </a>
        </Link>
    )
}

export default UserImage;