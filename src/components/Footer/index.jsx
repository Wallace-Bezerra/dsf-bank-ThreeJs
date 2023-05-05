import { footer } from "@/constants";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  const { contacts, copy, description, links, social } = footer;
  const renderLinks = links.map((link, index) => {
    return (
      <li key={`${index} link `} className="p light">
        <Link href={link.url}>{link.name}</Link>
      </li>
    );
  });
  const renderContacts = contacts.map((contact, index) => {
    return (
      <li key={`${index} contact `} className="p light">
        {contact}
      </li>
    );
  });
  const renderSocial = social.map((social, index) => {
    return (
      <li key={`${index} social `}>
        <Link href={social.url}>{social.component}</Link>
      </li>
    );
  });
  return (
    <footer className={styles.footer}>
      <div className={styles.container1}>
        <div className={styles.column1}>
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="dsf bank" width={50} height={30} />
          </Link>
          <p className="light">{description}</p>
        </div>
        <div className={styles.column2}>
          <h2 className="p">Links úteis</h2>
          <ul>{renderLinks}</ul>
        </div>
        <div className={styles.column3}>
          <h2 className="p">Contato</h2>
          <ul>{renderContacts}</ul>
        </div>
      </div>
      <div className={styles.container2}>
        <span className="p light">{copy}</span>
        <ul>{renderSocial}</ul>
      </div>
    </footer>
  );
};
