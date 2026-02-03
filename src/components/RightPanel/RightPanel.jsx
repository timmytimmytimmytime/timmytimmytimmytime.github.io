import styles from "./RightPanel.module.css";
import AboutSection from "../About/About";
import MobileApps from "./MobileApps";
import Products from './Products';
import Prototypes from './Prototypes';
import Achievements from './Achievements';

function RightPanel() {
  return (
    <main className={styles.rightPanel}>
      <div className={styles.contentCol}>

        <AboutSection />

        <MobileApps />

        <Products />

        <Prototypes />

        <Achievements />

      </div>
    </main>
  );
}

export default RightPanel;