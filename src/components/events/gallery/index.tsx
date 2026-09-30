import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import GalleryArea from "./GalleryArea"
import Cta from "@/components/homes/home-two/Cta"
import FooterOne from "@/layouts/footers/FooterOne"

const Gallery = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Breadcrumb title="Galerie photos" sub_title="Galerie photos" />
            <GalleryArea />
            <Cta variant="premium" />
         </main>
         <FooterOne />
      </>
   )
}

export default Gallery
