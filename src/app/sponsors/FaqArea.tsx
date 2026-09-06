import FaqSection from "@/components/common/FaqSection";
import { sponsor_faq_data } from "@/data/SponsorData";

export default function FaqArea() {
  return <FaqSection title={sponsor_faq_data.title} introduction={sponsor_faq_data.sub_title} groups={sponsor_faq_data.groups} prefix="sponsor-faq" />;
}
