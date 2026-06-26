type CtaItemType = {
  title: string;
  href: string;
};
interface CtaDataType {
  register: CtaItemType;
  reserve_stand: CtaItemType;
}
export const cta_data: CtaDataType = {
  register: {
    title: "S'inscrire",
    href: "/register",
  },
  reserve_stand: {
    title: "Réserver votre stand",
    href: "/exhibitions#exhibitions_form",
  },
};
