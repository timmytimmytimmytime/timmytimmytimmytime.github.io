// function AboutSection() {
//   return (
//     <div class="about-section">
//       <h2>About</h2>
//       <p>Customer-focused software engineer with a decade of experience delivering mobile applications and websites to millions of users, and inventor of a gesture-based input patent with 146+ industry citations.</p>

//       <p>From Microsoft Surface IR frameworks to Getty’s Contributor app, I specialize in bridging digital and physical interactions. Recent prototypes — AirType, CountAR, and FaceTrackAR — apply XR Hands and computer vision to advance more natural and intuitive interaction models.</p>

//       <p>Outside of work, I recharge through creative and social hobbies — from board games to painting minis.</p>
//     </div>
//   );
// }

// export default About;

import styles from "./About.module.css";
import Divider from "../Divider/Divider";


function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <Divider variant="strong" />
      <p>[2–3 paragraphs about yourself go here as placeholders.]</p>
      <p>[Another placeholder paragraph to simulate text density.]</p>
    </div>
  );
}

export default About;
