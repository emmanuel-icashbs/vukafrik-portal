import Breadcrumb from "@/components/common/Breadcrumb";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Counter from "./Counter";
import InnerFooter from "@/layouts/footers/InnerFooter";
import TeamHomeSix from "@/components/homes/home-six/Team";

const Team = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb title="Our Speakers" sub_title="Speakers8" />
        <TeamHomeSix />
        <Counter />
      </main>
      <InnerFooter />
    </>
  );
};

export default Team;
