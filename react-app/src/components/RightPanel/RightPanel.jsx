import styles from "./RightPanel.module.css";
import AboutSection from "../About/About";
import Card from "../Card/Card";
import Divider from "../Divider/Divider";

function RightPanel() {
  return (
    <main className={styles.rightPanel}>
      <section id="about">
        <AboutSection />
      </section>

      <Divider variant="strong" />

      <section id="cards" className={styles.cardsGrid}>
        <Card title="[Face Card 1]" text="Some placeholder text here" />
        <Card title="[Face Card 2]" text="Some placeholder text here" />
        <Card title="[Face Card 3]" text="Some placeholder text here" />
      </section>  

      <Divider variant="strong" />

      <section id="cards" className={styles.cardsGrid}>
        <Card title="[Face Card 1]" text="Some placeholder text here" />
        <Card title="[Face Card 2]" text="Some placeholder text here" />
        <Card title="[Face Card 3]" text="Some placeholder text here" />
      </section>

      <Divider variant="strong" />
      <section id="cards" className={styles.cardsGrid}>
        <Card title="[Face Card 1]" text="Some placeholder text here" />
        <Card title="[Face Card 2]" text="Some placeholder text here" />
        <Card title="[Face Card 3]" text="Some placeholder text here" />
      </section>

      <Divider variant="strong" />

      <section id="cards" className={styles.cardsGrid}>
        <Card title="[Face Card 1]" text="Some placeholder text here" />
        <Card title="[Face Card 2]" text="Some placeholder text here" />
      </section>

      <Divider variant="strong" />

      <section id="cards" className={styles.cardsGrid}>
        <Card title="[Face Card 1]" text="Some placeholder text here" />
      </section>

      <Divider variant="strong" />

      
    </main>
  );
}

export default RightPanel;


// import AboutSection from "../About/About";
// import Card from "../Card/Card";

// function RightPanel() {
//   return (
//     <main className="right-panel">
//       <section id="about">
//         <AboutSection />
//       </section>

//       <hr className="divider" />

//       <section id="cards" className="cards-grid">
//         <Card title="[Face Card 1]" text="Some placeholder text here" />
//         <Card title="[Face Card 2]" text="Some placeholder text here" />
//         <Card title="[Face Card 3]" text="Some placeholder text here" />

//       </section>

//       <hr className="divider" />
      
//       <section id="cards" className="cards-grid">
//         <Card title="[Face Card 1]" text="Some placeholder text here" />
//         <Card title="[Face Card 2]" text="Some placeholder text here" />
//       </section>

//       <hr className="divider" />

//       <section id="cards" className="cards-grid">
//         <Card title="[Face Card 1]" text="Some placeholder text here" />
//       </section>

//     </main>
//   );
// }

// export default RightPanel;
