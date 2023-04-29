import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
import { navLinks } from "../../constants/index";
export const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <div>
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={50} height={30} />
        </Link>
      </div>
      <nav className={styles.containerLinks}>
        <ul className={styles.links}>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
