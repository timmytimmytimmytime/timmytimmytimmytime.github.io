import { useMemo } from "react";
import styles from "./LeftPanel.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function LeftPanel() {
    const showThemeSwitcher = useMemo(() => {
      const params = new URLSearchParams(window.location.search);
      return params.has("themeSwitcher"); // or params.get("themeSwitcher") === "1"
    }, []);

  return (
    <aside className={styles.leftPanel}>

        <header className={styles.header}>
          <h1 className={styles.name}>Timothy Mosby</h1>      
          <h2 className={styles.role}>Senior Software Engineer</h2>
          {/* <Divider variant="light" /> */}
          <p className={styles.tagline}>
            Software engineer chasing the space between the digital and the real
          </p>
        </header>

        <div className={styles.navSocial}>
          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink}>
              <span className={styles.navIndicator}></span>
              <span>About</span>
            </a>
            <a href="#experiments" className={styles.navLink}>
              <span className={styles.navIndicator}></span>
              <span>Experiments</span>
            </a>
            <a href="#products" className={styles.navLink}>
              <span className={styles.navIndicator}></span>
              <span>Products</span>
            </a>
            <a href="#patent" className={styles.navLink}>
              <span className={styles.navIndicator}></span>
              <span>Patent</span>
            </a>
          </nav>

          <div className={styles.resumeCta}>
            <a href="/assets/Timothy-Mosby-Resume.pdf" className={styles.resumeButton}>
              Download Resume
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://github.com/timothymosby" target="_blank" rel="noopener noreferrer">[GitHub]</a>
            <a href="https://linkedin.com/in/timothymosby" target="_blank" rel="noopener noreferrer">[LinkedIn]</a>
            <a href="mailto:timothy.mosby@gmail.com">[Email]</a>
          </div>
        </div>


        {showThemeSwitcher && <ThemeSwitcher />}

    </aside>
  );
}

export default LeftPanel;
