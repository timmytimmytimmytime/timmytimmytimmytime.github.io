import CardGroup from "../Card/CardGroup";
import Card from "../Card/Card";

function MobileApps() {
  return (
        <section id="mobile">
          <CardGroup title="Mobile Apps">
            <div class="section-description" tabindex={1}>
              <p>
                Mobile apps built as portfolio pieces and technical demonstrations. These showcase different platforms and development approaches, with the focus on solid implementation.
              </p>
            </div> 

            <Card
              title="iOS Weather App"
              description="A native Swift weather application built with SwiftUI, showcasing iOS development fundamentals including API integration, asynchronous data handling, and adaptive UI design. Features real-time weather data, location services, and a clean interface following iOS design patterns and Human Interface Guidelines."
              tags={["Swift", "SwiftUI", "iOS", "Weather API", "Core Location"]}
              mediaStaticSrc="/assets/MyWeather-demo-static.jpg"
              mediaAnimatedSrc="/assets/MyWeather-demo-static.jpg"
              mediaAlt="iOS Weather App"
              href="https://github.com/timmytimmytimmytime/iOS-Weather"
              overrideStyle={{ imageDimensions: { display: 'block', margin: '0 auto', overflow: 'hidden', objectFit: 'cover', objectPosition: 'top', height: '200px', width: '180px' } }}
              tabindex={0}
            />

            <Card
              title="Flutter Cross-Platform Demo"
              description="A Flutter application demonstrating adaptive layouts, persistent navigation, and dynamic light/dark theming built with Material 3 across iOS, Android, macOS, and Web. The app includes live metric panels, status cards, notifications, and chat screens—showcasing Flutter’s strength in creating polished, production-grade experiences from a single codebase."
              tags={["Flutter", "Dart", "Material 3", "Cross-Platform", "Theme Switching"]}
              mediaStaticSrc="/assets/Flutter-demo-static.jpg"
              mediaAnimatedSrc="/assets/Flutter-demo.gif"
              mediaAlt="Flutter Cross-Platform Demo App"
              href="https://timmytimmytimmytime.github.io/flutter_crossplatform_demo/"
              tabindex={1}
            />

          </CardGroup>          
        </section>
  )
}

export default MobileApps;