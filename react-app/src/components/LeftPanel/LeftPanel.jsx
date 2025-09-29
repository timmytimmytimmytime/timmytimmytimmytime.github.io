import { useMemo } from "react";
import styles from "./LeftPanel.module.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import BreadCrumb from "../Navigation/BreadCrumb";
import SocialLinks from "../SocialLinks/SocialLinks";

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
        <p className={styles.tagline}>
          Software engineer chasing the space between the digital and the real
        </p>

        <BreadCrumb />
      </header>

      <div className={styles.panelFooter}>
        <SocialLinks />
        {showThemeSwitcher && <ThemeSwitcher />}
      </div>

    </aside>
  );
}

export default LeftPanel;
