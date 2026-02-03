import CardGroup from "../Card/CardGroup";
import Card from "../Card/Card";

function Achievements() {
  return (

        <section id="achievements">
          <CardGroup title="Achievements">
            <div class="section-description" tabindex={4}>
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
  )
}

export default Achievements;