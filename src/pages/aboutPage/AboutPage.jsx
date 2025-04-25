import { OurProjects } from "../../features"
import { AboutBaner, AboutServices, AboutUs } from "../../widgets"
import "./aboutPage.scss"


export const AboutPage = () => {
  return (
    <div>
      <AboutBaner />
      <OurProjects />
      <AboutServices />
      <AboutUs />
    </div>
  )
}
