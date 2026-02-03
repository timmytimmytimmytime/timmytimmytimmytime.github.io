import styles from "./RightPanel.module.css";
import AboutSection from "../About/About";
import CardGroup from "../Card/CardGroup";
import MobileApps from "./MobileApps";
import Products from './Products';
import Prototypes from './Prototypes';
import Achievements from './Achievements';

function RightPanel() {
  return (
    <main className={styles.rightPanel}>
      <div className={styles.contentCol}>

        <section id="summary" tabindex={0}>
          <CardGroup title="Summary">
            <AboutSection />
          </CardGroup>
        </section>

        <MobileApps />

        <Products />

        <Prototypes />

        <Achievements />

      </div>
    </main>
  );
}

export default RightPanel;