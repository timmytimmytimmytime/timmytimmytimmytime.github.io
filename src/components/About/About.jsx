import styles from './About.module.css';

function About() {
  return (
    <div>
      <div class="section-description">
        <p class={styles.goal}><strong>GOAL: To craft Mobile experiences that feel natural, purposeful, and exciting.</strong></p>

        <p>I build software that delights customers while solving real-world problems, taking ideas off the whiteboard, prototyping quickly, and shaping them into tangible experiences.</p>

        <p>My journey began in consumer internet services at global scale — spanning mail, messaging, payments, and internationalized web platforms — expanded into new interface frontiers with gesture interfaces, grew through years of web frontend and mobile app development, and now continues into emerging technologies that connect digital products with the physical world.</p> 
        
        <p>From computer vision and spatial interaction to AI and large language models, I’m always looking for new ways to translate innovation into experiences customers love.</p>

        <p style={{fontWeight: 500 }}>Internet&nbsp; → &nbsp;Gestures&nbsp; → &nbsp;Web&nbsp; → &nbsp;Mobile&nbsp; → &nbsp;Spatial & AI&nbsp;&nbsp;&nbsp; → &nbsp;Smarter Mobile Experiences</p>
      </div>

    </div>
  );
}

export default About;
