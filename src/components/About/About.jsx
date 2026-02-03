import styles from './About.module.css';
import CardGroup from "../Card/CardGroup";

function About() {
  return (
    <section id="summary" tabindex={0}>
      <CardGroup title="Summary">
        <div>
          <div class="section-description">

            <p class={styles.goal}><strong>Crafting Mobile experiences that feel natural, purposeful, and exciting.</strong></p>

            <p>I build native iOS and Android apps, as well as cross-platform mobile applications, that delight users while solving real-world problems — prototyping quickly, iterating based on feedback, and shipping polished products.</p>
            
            <p>I've worked on consumer internet services at global scale, explored gesture-based interfaces, built web applications across diverse platforms, and spent years in mobile engineering. Along the way, I've incorporated emerging technologies like AI, XR and CV, always focused on translating innovation into experiences users love.</p>

            <p style={{fontWeight: 500 }}>Internet&nbsp; → &nbsp;Gestures&nbsp; → &nbsp;Web&nbsp; → &nbsp;Mobile&nbsp; → &nbsp;AI/XR</p>

          </div>

        </div>
      </CardGroup>
    </section>
  );
}

export default About;