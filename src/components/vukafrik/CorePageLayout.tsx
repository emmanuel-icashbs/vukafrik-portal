import { ReactNode } from "react";

import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";

type CorePageLayoutProps = {
  children: ReactNode;
};

const CorePageLayout = ({ children }: CorePageLayoutProps) => {
  return (
    <>
      <HeaderThree />
      <main>{children}</main>
      <FooterOne />
    </>
  );
};

export default CorePageLayout;
