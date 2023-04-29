import { EarthComponent } from "./components/Earth";
import styles from "./style.module.scss";
import { rewards } from "@/constants";
export const Rewards = () => {
  const { lists, title } = rewards;
  const RenderListRewards = lists.map((list, index) => {
    return (
      <li key={index}>
        <h3 className="p">{list.title}</h3>
        <p className="light">{list.subtitle}</p>
      </li>
    );
  });
  return (
    <section className={styles.rewards}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className="title">{title}</h2>
          <ul>{RenderListRewards}</ul>
        </div>
      </div>
      <div>
        <EarthComponent />
      </div>
    </section>
  );
};
