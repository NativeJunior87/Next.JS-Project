import styles from "../../styles/Wordmark.module.css";
import { brand } from "../../data/content";


export default function Wordmark() {
  return (
    <div className={styles.wordmark} aria-hidden="true">
      {brand}
    </div>
  );
}
