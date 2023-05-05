import { resources } from "@/constants";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export const Resources = () => {
  const motionProps = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.1,
    },
  };
  const { title, subtitle, lists } = resources;
  const renderListsResources = lists.map((list, index) => {
    return (
      <li key={`${index} ${list.title}`} className={styles.item}>
        {list.icon}
        <h3 className="p">{list.title}</h3>
        <h4 className="p light">{list.subtitle}</h4>
      </li>
    );
  });
  return (
    <motion.section
      {...motionProps}
      id="resources"
      className={styles.resources}
    >
      <div className={styles.container}>
        <h2 className="title">{title}</h2>
        <p className="light">{subtitle}</p>
        <ul className={styles.list}>{renderListsResources}</ul>
      </div>
    </motion.section>
  );
};
