import HeaderThree from "@/layouts/headers/HeaderThree";
import Breadcrumb from "../common/Breadcrumb";
import ContactArea from "./ContactArea";
import ContactFormArea from "./ContactFormArea";
import FooterOne from "@/layouts/footers/FooterOne";
import { breadcrumb_data } from "@/data/ContactData";

const Contact = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={breadcrumb_data.sub_title}
          sub_title={breadcrumb_data.title}
        />
        <ContactArea />
        <ContactFormArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Contact;
