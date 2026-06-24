import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/logo-black.png"

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const OffCanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {

   return (
      <>
         <div className={`offCanvas__info ${offCanvas ? "active" : ""}`}>
            <div className="offCanvas__close-icon menu-close">
               <button onClick={() => setOffCanvas(false)}><i className="fa-sharp fa-regular fa-xmark"></i></button>
            </div>
            <div className="offCanvas__logo mb-30">
               <Link href="/"><Image src={logo} alt="Logo" /></Link>
            </div>
            <div className="offCanvas__side-info mb-30">
               <div className="contact-list mb-30">
                  <h4>Office Address</h4>
                  <Link href="https://www.google.com/maps" target="_blank">123/A, Miranda City Likaoli <br /> Prikano, Dope</Link>
               </div>
               <div className="contact-list mb-30">
                  <h4>Phone Number</h4>
                  <Link href="tel:(090)87658654385">+0989 7876 9865 9</Link>
                  <Link href="tel:(090)87658654385">+(090) 8765 86543 85</Link>
               </div>
               <div className="contact-list mb-30">
                  <h4>Email Address</h4>
                  <Link href="mailto:info@example.com">info@example.com</Link>
                  <Link href="mailto:info@example.com">example.mail@hum.com</Link>
               </div>
            </div>
            <div className="offCanvas__social-icon mt-30">
               <Link href="#"><i className="fab fa-facebook-f"></i></Link>
               <Link href="#"><i className="fab fa-twitter"></i></Link>
               <Link href="#"><i className="fab fa-google-plus-g"></i></Link>
               <Link href="#"><i className="fab fa-instagram"></i></Link>
            </div>
         </div>
         <div onClick={() => setOffCanvas(false)} className={`offCanvas__overly ${offCanvas ? "active" : ""}`}></div>
      </>
   )
}

export default OffCanvas
