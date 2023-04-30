import { CreditCardComponent } from "./components/CreditCard";
import styles from "./style.module.scss";
import { header } from "@/constants/index";
import { motion } from "framer-motion";

export const Header = () => {
  const motionProps = (initialX, finalX) => ({
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: finalX },
    viewport: { once: true },
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  });
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <motion.div {...motionProps(-200, 0)} className={styles.content}>
          <span>{header.caption}</span>
          <h1>{header.title}</h1>
          <p>{header.subtitle}</p>
        </motion.div>
        <motion.div {...motionProps(200, 0)} className={styles.model3d}>
          <CreditCardComponent />
        </motion.div>
      </div>
      <div></div>
    </header>
  );
};
