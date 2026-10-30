import styles from "../../styles/Crystal.module.css";

/**
 * The crystal lives in a sticky full-screen layer. It starts in the middle
 * of the hero and, driven by --p (set by ScrollStage), glides to the left
 * column of the About section.
 *
 * Swap the <svg> for an <Image> of your key art whenever you like.
 */
export default function Crystal() {
  return (
    <div className={styles.layer}>
      <div className={styles.art}>
        <svg viewBox="0 0 400 480" role="img" aria-label="Faceted violet crystal" className={styles.crystal}>
          <defs>
            <linearGradient id="f1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#c9a8ff" />
              <stop offset="1" stopColor="#6d34d9" />
            </linearGradient>
            <linearGradient id="f2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8b5cf0" />
              <stop offset="1" stopColor="#2a1260" />
            </linearGradient>
            <linearGradient id="f3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5a28b8" />
              <stop offset="1" stopColor="#140a30" />
            </linearGradient>
            <linearGradient id="f4" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3b1a80" />
              <stop offset="1" stopColor="#0c0620" />
            </linearGradient>
            <linearGradient id="ember" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffb45e" />
              <stop offset="1" stopColor="#d9531e" />
            </linearGradient>
          </defs>

          <polygon points="200,10 60,150 200,170" fill="url(#f1)" />
          <polygon points="200,10 340,150 200,170" fill="url(#f2)" />
          <polygon points="60,150 200,170 120,280" fill="url(#f3)" />
          <polygon points="60,150 120,280 200,470" fill="url(#f4)" />
          <polygon points="120,280 200,170 200,470" fill="url(#f3)" />
          <polygon points="340,150 200,170 285,270" fill="url(#f2)" />
          <polygon points="340,150 285,270 200,470" fill="url(#f3)" />
          <polygon points="285,270 200,170 200,470" fill="url(#f4)" />
          <polygon points="200,230 228,290 200,350 172,290" fill="url(#ember)" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}