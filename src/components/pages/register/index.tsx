import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import RegisterArea from "./RegisterArea";
import FooterOne from "@/layouts/footers/FooterOne";
import { breadcrumb_data } from "@/data/RegisterData";

const Register = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          title={breadcrumb_data.title}
          sub_title={breadcrumb_data.sub_title}
        />

        <RegisterArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Register;
