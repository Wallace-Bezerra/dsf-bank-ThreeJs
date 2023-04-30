import { testimonials } from "@/constants";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const motionProps = {
    offScreen: {
      opacity: 0,
      y: 50,
    },
    onScreen: (i = 2) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay: 0.2 * i,
      },
    }),
  };
  const { title, list } = testimonials;
  const renderList = list.map((list, index) => {
    return (
      <motion.li
        className={styles.item}
        key={index}
        variants={motionProps}
        custom={index}
        viewport={{ once: true }}
        initial="offScreen"
        whileInView="onScreen"
      >
        <div className={styles.heading}>
          <Image src={list.avatar} alt="avatar image" width={74} height={74} />
          <div>
            <h3 className="p">{list.name}</h3>
            <span className="p light">{list.role}</span>
          </div>
        </div>
        <p className="light">{list.comment}</p>
      </motion.li>
    );
  });
  return (
    <section id="testimonials" className={styles.testimonials}>
      <motion.h2
        variants={motionProps}
        viewport={{ once: true }}
        initial="offScreen"
        whileInView="onScreen"
        className="title"
      >
        {title}
      </motion.h2>
      <ul className={styles.list}> {renderList} </ul>
    </section>
  );
};
