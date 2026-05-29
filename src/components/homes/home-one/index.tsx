import HeaderOne from "@/layouts/headers/HeaderOne"
import Banner from "./Banner"
import Team from "./Team"
import TextSlider from "./TextSlider"
import Brand from "./Brand"
import Ticket from "./Ticket"
import Map from "./Map"
import FooterOne from "@/layouts/footers/FooterOne"
import Schedule from "./Schedule"
import About from "./About"
import Experience from "./Experience"
import Blog from "./Blog"

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Banner />
        <About />
        <Team />
        <Experience />
        <TextSlider />
        <Schedule />
        <Brand />
        <Ticket />
        <Blog />
        <Map />
        <TextSlider />
      </main>
      <FooterOne />
    </>
  )
}

export default HomeOne
