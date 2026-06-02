import ExhibitorsOpportunitiesPage from "@/components/vukafrik/pages/ExhibitorsOpportunitiesPage";
import Wrapper from "@/layouts/Wrapper";
import { createVukafrikMetadata } from "@/lib/vukafrik-route";

export const metadata = createVukafrikMetadata("/exhibitors-opportunities");

const page = () => {
  return (
    <Wrapper>
      <ExhibitorsOpportunitiesPage />
    </Wrapper>
  );
};

export default page;
