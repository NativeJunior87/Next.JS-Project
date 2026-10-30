import styles from "../../../styles/Aboutsection.module.css";
import { about } from "../../../data/About";

export default function AboutSection() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      {/* Giant ghost word, echoing the LORNIXE wordmark in the hero */}
      <div className={styles.ghost} aria-hidden="true">{about.ghost}</div>

      <div className={styles.inner}>
        {/* Empty slot: the floating crystal lands here on desktop */}
        <div className={styles.slot} aria-hidden="true" />

        <div className={styles.content}>
          <p className={styles.eyebrow}>{about.eyebrow}</p>
          <h2 id="about-title" className={styles.title}>{about.title}</h2>

          {about.paragraphs.map((text) => (
            <p key={text} className={styles.text}>{text}</p>
          ))}

          <ul className={styles.stats}>
            {about.stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <ul className={styles.pillars}>
            {about.pillars.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>

          <a href={about.cta.href} className={styles.cta}>
            {about.cta.label}
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  );
}