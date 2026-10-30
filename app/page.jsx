import Navbar from "./components/Homepage/Navbar";
import Wordmark from "./components/Homepage/Wordmark";
import Crystal from "./components/Homepage/Crystal";
import Headline from "./components/Homepage/Headline";
import Intro from "./components/Homepage/Intro";
import PlaytestCard from "./components/Homepage/PlaytestCard";
import ScrollStage from "./components/Homepage/ScrollStage";
import AboutSection from "./components/Homepage/AboutSection/Aboutsection";
import styles from "./styles/Hero.module.css";

export default function Home() {
  return (
    <ScrollStage>
      {/* Sticky layer: the crystal travels from the hero to the About section */}
      <Crystal />
 
      <section id="home" className={styles.hero}>
        <Navbar />
        <Wordmark />
        <Headline />
        <Intro />
        <PlaytestCard />
      </section>
 
        <AboutSection />
    </ScrollStage>
  );
}
 