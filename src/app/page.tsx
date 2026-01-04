
import Hero from "@/components/Hero/Hero";
import styles from "./page.module.scss";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      {/* Portfolio sections  */}
      <Hero />
      <About />
      <Projects />
    </div >
  );
}
