import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Counter from "./Counter";
import TeamHomeSix from "@/components/homes/home-six/Team";
import FooterOne from "@/layouts/footers/FooterOne";
import Cta from "./Cta";
import FormArea from "./FormArea";

const Team = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="Our Speakers" sub_title="Speakers8" />
        <TeamHomeSix />
        
        <FormArea />
        <Counter />
      </main>
      <FooterOne />
    </>
  );
};

export default Team;
