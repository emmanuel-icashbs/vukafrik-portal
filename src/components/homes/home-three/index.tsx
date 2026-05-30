import HeaderThree from "@/layouts/headers/HeaderThree"
import Banner from "./Banner"
import Countdown from "./Countdown"
import Feature from "./Feature"
import About from "./About"
import FooterOne from "@/layouts/footers/FooterOne"
import Event from "./Event"
import Audience from "./Audience"
import TextSlider from "../home-one/TextSlider"
import Experience from "../home-one/Experience"
import Partners from "./Partners"
import Venue from "./Venue"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Banner />
            <Countdown />
            <Feature />
            <About />
            <Event />
            <TextSlider />
            <Audience />
            <Experience />
            <Partners />
            <Venue />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeThree
