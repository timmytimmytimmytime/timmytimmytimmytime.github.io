import styles from "./RightPanel.module.css";
import AboutSection from "../About/About";
import CardGroup from "../Card/CardGroup";
import Card from "../Card/Card";

function RightPanel() {
  return (
    <main className={styles.rightPanel}>
      <div className={styles.contentCol}>
        <section id="about">
          <AboutSection />
        </section>

        <section id="experiments">
          <CardGroup title="Experiments">
            <div class="section-description">
              <p>
                Prototyping hand-tracking interactions, mixed reality applications, and
                graphics workflows using Unity, OpenXR and OpenCV. These experiments are
                where I push into new spatial computing ideas and test future-facing
                interaction patterns.
              </p>
            </div> 

            <Card
              title="CountAR - Finger Counting"
              description="CountAR is a Unity prototype for Meta Quest 3 that recognizes how many fingers you’re holding up and updates the count in real time using XR Hands. It’s tuned for low-latency, stable detection (0–5 per hand), with clean UI feedback that makes it great for gesture lessons, quick demos, and MR/AR onboarding. The project is intentionally small and dependency-light so you can drop it into other scenes as a building block for gesture-driven UX."
              tags={["Unity", "XR Hands", "Meta Quest 3", "Hand Tracking", "C#"]}
              mediaStaticSrc="/assets/CountAR-demo-static.jpg"
              mediaAnimatedSrc="/assets/CountAR-demo.gif"
              mediaAlt="CountAR - Finger Counting"

            />
            
            <Card
              title="AirType - 3D Spatial Keyboard"
              description="AirType is a mid-air keyboard powered by real-time hand-tracking. Finger position and depth map to a virtual QWERTY, while thumbs trigger space and modifiers—so you can type without a surface. Built with OpenCV/MediaPipe, it extends ideas from my gesture-input patent."
              tags={["OpenCV", "Python", "Computer Vision", "Hand Tracking"]}
              mediaStaticSrc="/assets/AirType-demo-static.jpg"
              mediaAnimatedSrc="/assets/AirType-demo.gif"
              mediaAlt="AirType 3D Spatial Keyboard"
            />

                                        
            <Card
              title="FaceTrackAR - Cartoon Face Expression Mapper"
              description="FaceTrackAR is a lightweight OpenCV demo that reads live facial landmarks and maps expressions to a cartoon avatar in real time. It tracks smiles, blinks, eyebrow raises, with simple smoothing to keep motion stable. Quick to set up and fun to use, it’s a handy building block for streaming overlays or MR prototypes."
              tags={["OpenCV", "Computer Vision", "Python", "MediaPipe", "Real-time"]}
              mediaStaticSrc="/assets/FaceTrackAR-demo-static.jpg"
              mediaAnimatedSrc="/assets/FaceTrackAR-demo.gif"
              mediaAlt="FaceTrackAR - Face Expression Mapper"
            />

          </CardGroup>          
        </section>

      </div>
    </main>
  );
}

export default RightPanel;