import styles from "../../styles/Headline.module.css";
import { headline } from "../../data/content";

export default function Headline() {
  return (
    <h1 className={styles.headline}>
      <span className={`${styles.script} ${styles.left}`}>{headline.left}</span>
      <span className={`${styles.script} ${styles.right}`}>{headline.right}</span>
      <span className={styles.tagline}>{headline.tagline}</span>
    </h1>
  );
}
