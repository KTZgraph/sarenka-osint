import Image from 'next/image'

import classes from './footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <a
        href="https://github.com/pawlaczyk/sarenka"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sarenka{' '}
        <span className={classes.logo}>
          <Image src="/logo.png" alt="Sarenka Logo" width={30} height={30} />
        </span>
      </a>
    </footer>
  );
}

export default Footer;
