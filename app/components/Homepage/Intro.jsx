import styles from "../../styles/Intro.module.css";
import { intro } from "../../data/content";

export default function Intro() {
  return (
    <section className={styles.intro} id="wishlist">
      <h2>{intro.title}</h2>
      <p>{intro.text}<a href={intro.href}>Here</a></p>
    </section>
  );
}
