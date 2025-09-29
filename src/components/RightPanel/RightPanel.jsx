import styles from "./RightPanel.module.css";
import AppStoreButton from "../StoreButton/AppStoreButton";
import AboutSection from "../About/About";
import CardGroup from "../Card/CardGroup";
import Card from "../Card/Card";

function RightPanel() {
  return (
    <main className={styles.rightPanel}>
      <div className={styles.contentCol}>

        <section id="summary" tabindex={0}>
          <CardGroup title="Summary">
            <AboutSection />
          </CardGroup>
        </section>

        <section id="prototypes">
          <CardGroup title="Prototypes">
            <div class="section-description" tabindex={0}>
              <p>
                Exploring new interaction models through rapid prototyping in Unity with OpenXR and OpenCV — from hand-tracking keyboards to mixed-reality applications and open-source gesture libraries. These projects are my testbed for future-facing ideas: validating concepts, refining workflows, and pushing the boundaries of spatial computing. Beyond XR, I also experiment with AI, building tools like a Firefox plugin that fact-checks LLMs in real time to cut down on omissions and fabrications. Together, these prototypes reflect how I investigate emerging technologies and translate them into practical, user-centered possibilities.
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
              tabindex={0}
            />
            
            <Card
              title="AirType - 3D Spatial Keyboard"
              description="AirType is a mid-air keyboard powered by real-time hand-tracking. Finger position and depth map to a virtual QWERTY, while thumbs trigger space and modifiers—so you can type without a surface. Built with OpenCV/MediaPipe, it extends ideas from my gesture-input patent."
              tags={["OpenCV", "Python", "Computer Vision", "Hand Tracking"]}
              mediaStaticSrc="/assets/AirType-demo-static.jpg"
              mediaAnimatedSrc="/assets/AirType-demo.gif"
              mediaAlt="AirType 3D Spatial Keyboard"
              href="https://github.com/timmytimmytimmytime/AirType"
              tabindex={0}
            />

                                        
            <Card
              title="FaceTrackAR - Cartoon Face Expression Mapper"
              description="FaceTrackAR is a lightweight OpenCV demo that reads live facial landmarks and maps expressions to a cartoon avatar in real time. It tracks smiles, blinks, eyebrow raises, with simple smoothing to keep motion stable. Quick to set up and fun to use, it’s a handy building block for streaming overlays or MR prototypes."
              tags={["OpenCV", "Computer Vision", "Python", "MediaPipe", "Real-time"]}
              mediaStaticSrc="/assets/FaceTrackAR-demo-static.jpg"
              mediaAnimatedSrc="/assets/FaceTrackAR-demo.gif"
              mediaAlt="FaceTrackAR - Face Expression Mapper"
              href="https://github.com/timmytimmytimmytime/FaceTrackAR"
              tabindex={0}
            />

          </CardGroup>          
        </section>

        <section id="products">
          <CardGroup title="Products">
            <div class="section-description" tabindex={0}>
              <p>
                Over two decades of delivering products used worldwide across consumer, enterprise, and creative industries.
              </p>

              <p>
                <strong>Getty Images</strong> — led cross-platform development of the Contributor app, enabling photographers globally to upload, manage, and monetize their work; supported core website features and e-commerce integrations.
              </p>

              <p>
                <strong>Microsoft Surface PixelSense</strong> — built natural user interface software for multi-touch and gesture-based experiences.
              </p>

              <p>
                <strong>Microsoft Internet Explorer & Exchange Server</strong> — engineered internationalization tools for Internet Explorer and shipped mail/messaging services in Exchange serving hundreds of millions of users.
              </p>

              <p>
                <strong>IBM NUMA</strong> — contributed to next-generation enterprise scalability.
              </p>

              <p>
                <strong>Intel WBEM</strong> — advanced systems management and interoperability standards.
              </p>

              <p>
                Along the way I’ve driven feature delivery, owned infrastructure, integrated machine learning into production workflows, and mentored engineers within agile teams.
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
              tabindex={0}
            />
            
            <Card
              title="Microsoft Surface (PixelSense)"
              description="Worked on the pioneering multi-touch interface team for Microsoft Surface (PixelSense), contributing to one of the earliest large-scale interactive tabletop systems. Designed and implemented frameworks for IR sensor automation, calibration, and diagnostic testing, along with input injection tools for complex multi-touch gestures. These efforts advanced the foundation of natural user interaction (NUI) and provided the engineering team with reliable infrastructure to explore new modalities like gesture-based input, object recognition, and collaborative applications."
              tags={["C#", ".NET", "WPF", "Gesture Recognition", "IR Sensor Testing"]}
              mediaStaticSrc="/assets/Microfoft_Surface_PixelSense2.JPG"
              mediaAnimatedSrc="/assets/Microfoft_Surface_PixelSense2.JPG"
              mediaAlt="AirType 3D Spatial Keyboard"
              href="https://en.wikipedia.org/wiki/Microsoft_PixelSense"
              tabindex={0}
            />

          </CardGroup>          
        </section>

        <section id="achievements">
          <CardGroup title="Achievements">
            <div class="section-description" tabindex={0}>
              <p>Invented a Microsoft Surface patent for rendering virtual keyboards relative to hand position, a solution cited over 140 times by major companies. This recognition reflects my ability to solve novel interaction challenges and contribute ideas that shape industry standards.</p>
            </div> 

            <Card
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
              meta="⭐ 146+ Citations • 📱 Apple, Amazon, Google • 📅 12+ Years Active"              
              mediaStaticSrc="/assets/PatentPlacard.jpg"
              mediaAnimatedSrc="/assets/PatentPlacard.jpg"
              mediaAlt="Patent Placard"
              href="https://patents.google.com/patent/US8619036"
              tabindex={0}
            />

          </CardGroup>          
        </section>

      </div>
    </main>
  );
}

export default RightPanel;