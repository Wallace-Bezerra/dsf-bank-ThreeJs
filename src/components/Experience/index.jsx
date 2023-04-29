import styles from "./style.module.scss";
import { experience } from "@/constants";
export const Expirience = () => {
  const renderExpirience = experience.map((exp, index) => {
    return (
      <div key={index} className={`${styles.content} ${styles[exp.color]}`}>
        <h2 className="title">{exp.title}</h2>
        <h3 className="p">{exp.subtitle}</h3>
      </div>
    );
  });
  return <section className={styles.experience}>{renderExpirience}</section>;
};
