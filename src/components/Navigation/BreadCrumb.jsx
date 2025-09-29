import { useState, useEffect } from "react";
import styles from "./BreadCrumb.module.css";

const sections = ["about", "experiments", "products", "patent"];

function BreadCrumb() {
  const [activeId, setActiveId] = useState("about");

  // Scroll-aware observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 } // 60% visible = active
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${styles.navLink} ${
            activeId === id ? styles.navLinkActive : ""
          }`}
          onClick={() => setActiveId(id)}
        >
          <span className={styles.navIndicator}></span>
          <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
        </a>
      ))}
    </nav>
  );
}

export default BreadCrumb;
