import FaqSection from "@/components/common/FaqSection";
import { faqGroups, title, sub_title } from "@/data/FaqData";

export default function FaqArea() {
  return <FaqSection title={title} introduction={sub_title} groups={faqGroups} prefix="general-faq" />;
}
