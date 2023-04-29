import { resources } from "@/constants";
import styles from "./style.module.scss";
import Image from "next/image";

export const Resources = () => {
  const { title, subtitle, lists } = resources;
  const renderListsResources = lists.map((list, index) => {
    return (
      <li key={index} className={styles.item}>
        {list.icon}
        <h3 className="p">{list.title}</h3>
        <h4 className="p light">{list.subtitle}</h4>
      </li>
    );
  });
  return (
    <section id="resources" className={styles.resources}>
      <div className={styles.container}>
        <h2 className="title">{title}</h2>
        <p className="light">{subtitle}</p>
        <ul className={styles.list}>{renderListsResources}</ul>
      </div>
    </section>
  );
};
