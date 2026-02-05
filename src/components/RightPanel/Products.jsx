import AppStoreButton from "../StoreButton/AppStoreButton";
import CardGroup from "../Card/CardGroup";
import Card from "../Card/Card";

function Products() {
  return (
        <section id="products">
          <CardGroup title="Products">
            <div class="section-description" tabindex={2}>
              <p>
                Over two decades of delivering products used worldwide across consumer, enterprise, and creative industries.
              </p>

              <p>
                <strong>Getty Images</strong> — led cross-platform development of the Contributor app, enabling photographers globally to upload, manage, and monetize their work; supported core website features and e-commerce integrations.
              </p>

              <p>
                <strong>Microsoft Surface PixelSense</strong> — built natural user interface software for multi-touch and gesture-based experiences.
              </p>
{/* 
              <p>
                <strong>Microsoft Internet Explorer & Exchange Server</strong> — engineered internationalization tools for Internet Explorer and shipped mail/messaging services in Exchange serving hundreds of millions of users.
              </p>

              <p>
                <strong>IBM NUMA</strong> — contributed to next-generation enterprise scalability.
              </p>

              <p>
                <strong>Intel WBEM</strong> — advanced systems management and interoperability standards.
              </p> */}

              <p>
                Along the way I’ve driven feature delivery, owned infrastructure, integrated machine learning into production workflows, and mentored engineers within agile teams.
              </p>
            </div> 

            <Card
              title="Contributor by Getty Images"
              description="A React Native app for professional photographers to upload creative content, access briefs tailored to their expertise, and monitor ongoing performance and earnings. Led development of several core features over six years, guiding the app through major updates and platform transitions. The app achieved over 1M downloads across iOS and Android with consistent 4.7+ ratings, becoming the central workflow tool for over 200K contributors worldwide and remaining one of Getty’s highest-impact mobile products."
              tags={["React Native", "iOS", "Android", "JavaScript", "REST APIs"]}
              mediaStaticSrc="/assets/ContributorStoreScreenshot.JPEG"
              mediaAnimatedSrc="/assets/ContributorStoreScreenshot.JPEG"
              mediaAlt="App store screenshot"
              storeButtons={
                <>
                  <AppStoreButton
                    // href="https://apps.apple.com/us/app/contributor-by-getty-images/id1263205244"
                    href="https://web.archive.org/web/20250921153408/https://apps.apple.com/us/app/contributor-by-getty-images/id1263205244"
                    type="appstore"
                  />

                  <AppStoreButton
                    // href="https://play.google.com/store/apps/details?id=com.contributor"
                    href="https://web.archive.org/web/20250521062019/https://play.google.com/store/apps/details?id=com.contributor"
                    type="playstore"
                  />
                </>
              }
              isRetired="true"
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
  )
}

export default Products;