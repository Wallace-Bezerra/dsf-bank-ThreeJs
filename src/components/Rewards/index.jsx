import { EarthComponent } from "./components/Earth";
import styles from "./style.module.scss";
import { rewards } from "@/constants";
import { motion } from "framer-motion";
export function Rewards() {
  const motionProps = (initialX, finalX, delay) => ({
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: finalX },
    viewport: { once: true },
    transition: {
      type: "just",
      bounce: 0.4,
      duration: 0.8,
      delay: delay,
    },
  });
  const { lists, title } = rewards;
  const RenderListRewards = lists.map((list, index) => {
    return (
      <motion.li
        key={`${index} ${list.title} listRewards`}
        {...motionProps(-100, 0, 0.1)}
      >
        <h3 className="p">{list.title}</h3>
        <p className="light">{list.subtitle}</p>
      </motion.li>
    );
  });

  return (
    <section id="rewards" className={styles.rewards}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.h2 {...motionProps(-100, 0, 0.3)} className="title">
            {title}
          </motion.h2>
          <ul>{RenderListRewards}</ul>
        </div>
        <motion.div
          className={styles.model3d}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ durantion: 1, delay: 0.4 }}
        >
          <EarthComponent />
        </motion.div>
      </div>
    </section>
  );
}
