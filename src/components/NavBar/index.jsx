import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
import { navLinks } from "../../constants/index";
import { useState } from "react";
import { motion } from "framer-motion";
export const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const listMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 280 },
  };
  const listItemMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 50, transition: { durantion: 2 } },
  };

  const renderLinks = navLinks.map((link, index) => {
    return (
      <motion.li key={`${index} ${link.name}`} variants={listItemMotionProps}>
        <a href={link.url}>{link.name}</a>
      </motion.li>
    );
  });
  return (
    <section className={styles.navbar}>
      <div>
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" width={50} height={30} />
        </Link>
      </div>
      <nav className={styles.containerLinks}>
        <ul className={styles.links}>{renderLinks}</ul>
        <motion.ul
          className={styles["mobile-links"]}
          variants={listMotionProps}
          animate={IsOpen ? "open" : "closed"}
          transition={{
            when: "beforeChildren",
            staggerChildren: 0.2,
            type: "just",
          }}
        >
          {renderLinks}
          <Image
            onClick={() => {
              setIsOpen(!IsOpen);
            }}
            id={styles.close}
            src={"/IconClose.svg"}
            width={18}
            height={18}
            alt=""
          />
        </motion.ul>
        <div
          onClick={() => {
            setIsOpen(!IsOpen);
          }}
          className={styles.mobile}
        >
          <Image src={"/MenuMobile.svg"} width={30} height={30} alt="" />
        </div>
      </nav>
    </section>
  );
};
