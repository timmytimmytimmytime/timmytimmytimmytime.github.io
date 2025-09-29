import styles from "./RightPanel.module.css";
import AppStoreButton from "../StoreButton/AppStoreButton";
import AboutSection from "../About/About";
import CardGroup from "../Card/CardGroup";
import Card from "../Card/Card";

function RightPanel() {
  return (
    <main className={styles.rightPanel}>
      <div className={styles.contentCol}>

        <section id="about">
          <CardGroup title="About">
            <AboutSection />
          </CardGroup>
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
              href="https://github.com/timmytimmytimmytime/CountAR"
            />
            
            <Card
              title="AirType - 3D Spatial Keyboard"
              description="AirType is a mid-air keyboard powered by real-time hand-tracking. Finger position and depth map to a virtual QWERTY, while thumbs trigger space and modifiers—so you can type without a surface. Built with OpenCV/MediaPipe, it extends ideas from my gesture-input patent."
              tags={["OpenCV", "Python", "Computer Vision", "Hand Tracking"]}
              mediaStaticSrc="/assets/AirType-demo-static.jpg"
              mediaAnimatedSrc="/assets/AirType-demo.gif"
              mediaAlt="AirType 3D Spatial Keyboard"
              href="https://github.com/timmytimmytimmytime/AirType"
            />

                                        
            <Card
              title="FaceTrackAR - Cartoon Face Expression Mapper"
              description="FaceTrackAR is a lightweight OpenCV demo that reads live facial landmarks and maps expressions to a cartoon avatar in real time. It tracks smiles, blinks, eyebrow raises, with simple smoothing to keep motion stable. Quick to set up and fun to use, it’s a handy building block for streaming overlays or MR prototypes."
              tags={["OpenCV", "Computer Vision", "Python", "MediaPipe", "Real-time"]}
              mediaStaticSrc="/assets/FaceTrackAR-demo-static.jpg"
              mediaAnimatedSrc="/assets/FaceTrackAR-demo.gif"
              mediaAlt="FaceTrackAR - Face Expression Mapper"
              href="https://github.com/timmytimmytimmytime/FaceTrackAR"
            />

          </CardGroup>          
        </section>

        <section id="products">
          <CardGroup title="Products">
            <div class="section-description">
              <p>
                Over two decades of shipping enterprise-scale products across industries. At Getty Images, led cross-platform mobile development for the Contributor app and core website features. Earlier: Surface PixelSense, IE & Exchange, plus IBM NUMA and Intel WBEM—experience. Roles have included feature delivery, infrastructure ownership, ML integrations, and mentoring within agile teams. 
              </p>
            </div> 

            <Card
              title="Contributor by Getty Images"
              description="A React Native app for professional photographers to upload creative content, access briefs tailored to their expertise, and monitor ongoing performance and earnings. I led development on several core features as my primary project for six years, guiding the app through major updates and platform transitions. The app achieved more than 1M downloads across iOS and Android with consistent 4.7+ ratings, becoming the central workflow tool for over 200K contributors worldwide and remaining one of Getty’s highest-impact mobile products."
              tags={["React Native", "iOS", "Android", "JavaScript", "REST APIs"]}
              mediaStaticSrc="/assets/ContributorStoreScreenshot.JPEG"
              mediaAnimatedSrc="/assets/ContributorStoreScreenshot.JPEG"
              mediaAlt="App store screenshot"
              storeButtons={
                <>
                  <AppStoreButton
                    href="https://apps.apple.com/us/app/contributor-by-getty-images/id1263205244"
                    type="appstore"
                  />

                  <AppStoreButton
                    href="https://play.google.com/store/apps/details?id=com.contributor"
                    type="playstore"
                  />
                </>
              }
            />
            
            <Card
              title="Microsoft Surface (PixelSense)"
              description="Worked on the pioneering multi-touch interface team for Microsoft Surface (PixelSense), contributing to one of the earliest large-scale interactive tabletop systems. Designed and implemented frameworks for IR sensor automation, calibration, and diagnostic testing, along with input injection tools for complex multi-touch gestures. These efforts advanced the foundation of natural user interaction (NUI) and provided the engineering team with reliable infrastructure to explore new modalities like gesture-based input, object recognition, and collaborative applications."
              tags={["C#", ".NET", "WPF", "Gesture Recognition", "IR Sensor Testing"]}
              mediaStaticSrc="/assets/Microfoft_Surface_PixelSense2.JPG"
              mediaAnimatedSrc="/assets/Microfoft_Surface_PixelSense2.JPG"
              mediaAlt="AirType 3D Spatial Keyboard"
              href="https://en.wikipedia.org/wiki/Microsoft_PixelSense"
            />

          </CardGroup>          
        </section>

        <section id="patent">
          <CardGroup title="Patent">
            <div class="section-description">
              <p>
                While working on Microsoft Surface, invented a patent enabling virtual keyboard rendering relative to a user’s hand position—illustrating the kind of creative problem-solving that I bring to the table.
              </p>
            </div> 

            <Card
              // title="Virtual Keyboard Based Activation and Dismissal</br>US Patent: US8619036B2, Dec 31 2013"
              title={<>
                        Virtual Keyboard Based Activation and Dismissal
                        <br />
                        US Patent: US8619036B2, Dec 31 2013
                      </>
                    }
              description="A gesture-based virtual keyboard system that dynamically adapts to each user’s 
              natural hand placement, positioning keys beneath the fingertips to reduce reach and enable 
              faster, more intuitive input. The design emphasized comfort and adaptability, minimizing strain 
              by tailoring the keyboard layout in real time. This patent described methods for detecting hand 
              position, and allowing fluid transitions between typing and other 
              on-screen interactions. It laid the groundwork for adaptive input systems that improve usability on 
              touch devices by aligning digital keyboards with human ergonomics, rather than forcing users to 
              conform to fixed layouts."
              meta="⭐ 146+ Citations • 📱 Apple, Google, Microsoft • 📅 12+ Years Active"              
              mediaStaticSrc="/assets/PatentPlacard.jpg"
              mediaAnimatedSrc="/assets/PatentPlacard.jpg"
              mediaAlt="Patent Placard"
              href="https://patents.google.com/patent/US8619036"
            />

          </CardGroup>          
        </section>

      </div>
    </main>
  );
}

export default RightPanel;