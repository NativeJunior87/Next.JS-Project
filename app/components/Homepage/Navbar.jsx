"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { brand, navLinks } from "../../data/content";

const toHref = (label) => `#${label.toLowerCase().replace(/\s+/g, "-")}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the menu if the screen grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 761px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={styles.nav}>
      <a href="#" className={styles.logo} aria-label={`${brand} home`}>
        {brand}
      </a>

      {/* Desktop links */}
      <nav className={styles.links} >
        {navLinks.map((label) => (
          <a key={label} href={toHref(label)}>
            {label}
          </a>
        ))}
      </nav>

      {/* Desktop button */}
      <a href="#support" className={`${styles.button} ${styles.desktopOnly}`}>
        Support us
      </a>

      {/* Mobile hamburger */}
      <button
        type="button"
        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {/* Mobile menu */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <nav
        id="mobile-menu"
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-label="Mobile"
      >
        {navLinks.map((label) => (
          <a key={label} href={toHref(label)} onClick={close} tabIndex={open ? 0 : -1}>
            {label}
          </a>
        ))}
        <a
          href="#support"
          className={styles.panelButton}
          onClick={close}
          tabIndex={open ? 0 : -1}
        >
          Support us
        </a>
      </nav>
    </header>
  );
}
