import styles from "./LeftPanel.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Divider from "../Divider/Divider";

function LeftPanel() {
  return (
    <aside className={styles.leftPanel}>
      {/* <section className="styles.outerLayout"> */}

        <header className={styles.header}>
          <h1 className={styles.name}>Timothy Mosby</h1>      
          <h2 className={styles.role}>Senior Software Engineer</h2>
          {/* <Divider variant="light" /> */}
          <p className={styles.tagline}>
            Software engineer chasing the space between the digital and the real
          </p>
        </header>

        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>
            <span className={styles.navIndicator}></span>
            <span>About</span>
          </a>
          <a href="#projects" className={styles.navLink}>
            <span className={styles.navIndicator}></span>
            <span>XR Experiments</span>
          </a>
          <a href="#products" className={styles.navLink}>
            <span className={styles.navIndicator}></span>
            <span>Enterprise Products</span>
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
        <Divider variant="default" />
        <ThemeSwitcher />

      {/* </section> */}
    </aside>
  );
}

export default LeftPanel;
