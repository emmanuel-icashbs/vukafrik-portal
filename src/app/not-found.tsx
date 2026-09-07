import NotFound from "@/components/pages/error";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  alternates: { canonical: null },
  robots: { index: false, follow: true },
  title: "Page introuvable | VUK’AFRIK 2026",
  description: "Cette page est introuvable. Retrouvez le programme et les informations de VUK’AFRIK depuis l’accueil.",
};
const NotFoundPage = () => {
   return (
      <Wrapper>
         <NotFound />
      </Wrapper>
   )
}

export default NotFoundPage
