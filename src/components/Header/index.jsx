import { CreditCardComponent } from "./components/CreditCard";
import styles from "./style.module.scss";
import { header } from "@/constants/index";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span>{header.caption}</span>
          <h1>{header.title}</h1>
          <p>{header.subtitle}</p>
        </div>
        <div className={styles.model3d}>
          <CreditCardComponent />
        </div>
      </div>
      <div></div>
    </header>
  );
};
