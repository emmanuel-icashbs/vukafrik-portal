"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import CorePageHero from "@/components/vukafrik/CorePageHero";
import CorePageLayout from "@/components/vukafrik/CorePageLayout";
import {
  speakerCategories,
  speakersPlaceholder,
  vukafrikEvent,
} from "@/data/vukafrik-content";

const speakersHero = {
  eyebrow: "Speakers",
  title: "Speakers",
  subtitle:
    "VUK'AFRIK reunira des decideurs publics, dirigeants d'entreprises, investisseurs, experts, entrepreneurs, regulateurs, formateurs et leaders d'ecosysteme.",
  actions: [
    {
      label: "Proposer une intervention",
      href: "/speaker-application",
      variant: "primary" as const,
    },
    { label: "Voir le programme", href: "/program", variant: "secondary" as const },
  ],
};

const SpeakersPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredSpeakers = useMemo(() => {
    if (activeCategory === "Tous") {
      return speakersPlaceholder;
    }

    return speakersPlaceholder.filter(
      (speaker) => speaker.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <CorePageLayout>
      <CorePageHero
        data={{
          ...speakersHero,
          meta: [vukafrikEvent.dates, vukafrikEvent.venue],
        }}
      />

      <section className="vuka-page-section pb-140">
        <div className="container">
          <div className="vuka-tab-row mb-40">
            {speakerCategories.map((category) => (
              <button
                key={category}
                className={`vuka-tab-pill ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="row">
            {filteredSpeakers.map((speaker) => (
              <div key={speaker.slug} className="col-xl-3 col-lg-6 col-md-6">
                <div className="vuka-speaker-card mb-30">
                  <div className="vuka-speaker-thumb">
                    <Image src={speaker.image} alt={speaker.name} />
                  </div>
                  <div className="vuka-speaker-content">
                    <span className="vuka-speaker-category">{speaker.category}</span>
                    <h3>{speaker.name}</h3>
                    <h4>{speaker.role}</h4>
                    <p className="vuka-speaker-org">{speaker.organisation}</p>
                    <p>{speaker.bio}</p>
                    <div className="vuka-page-hero__meta vuka-page-hero__meta--inline">
                      <span>Thematique a confirmer</span>
                    </div>
                    <div className="vuka-speaker-links">
                      {speaker.socialLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CorePageLayout>
  );
};

export default SpeakersPage;
