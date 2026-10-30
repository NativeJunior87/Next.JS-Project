import styles from "../../styles/PlaytestCard.module.css";
import { playtest } from "../../data/content";

export default function PlaytestCard() {
  return (
    <aside className={styles.card} aria-labelledby="playtest-title">
      <h2 id="playtest-title">{playtest.title}</h2>
      <p>{playtest.text}</p>
      <a href={playtest.href} className={styles.link}>
        {playtest.cta}
        <span className={styles.dot} aria-hidden="true" />
      </a>
    </aside>
  );
}
