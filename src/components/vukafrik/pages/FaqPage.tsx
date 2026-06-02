import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import { faqGroups } from "@/data/vukafrik-content";

const faqHero = {
  eyebrow: "Questions & reponses",
  title: "Questions frequentes",
  subtitle:
    "Retrouvez les reponses essentielles sur l'inscription, la participation, le sponsoring, l'exposition, l'acces media et le lieu.",
  actions: [
    { label: "S'inscrire", href: "/register", variant: "primary" as const },
    { label: "Contacter l'equipe", href: "/contact", variant: "secondary" as const },
  ],
};

const FaqPage = () => {
  return (
    <CorePageLayout>
      <CorePageHero data={faqHero} />

      <section className="vuka-page-section pb-140">
        <div className="container">
          {faqGroups.map((group) => (
            <div key={group.title} className="mb-40">
              <div className="vuka-section-heading mb-20">
                <span className="vuka-card-eyebrow">{group.title}</span>
              </div>
              <div className="row">
                {group.questions.map((item) => (
                  <div key={item.question} className="col-xl-6">
                    <div className="vuka-faq-card mb-25">
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </CorePageLayout>
  );
};

export default FaqPage;
