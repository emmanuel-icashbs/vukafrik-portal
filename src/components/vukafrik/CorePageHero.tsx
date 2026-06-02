import Link from "next/link";

import heroSlideOne from "@/assets/img/hero/hero-3/slider.jpg";
import heroSlideTwo from "@/assets/img/hero/hero-3/slider-2.jpg";
import { VukafrikPageHeroData } from "@/data/vukafrik-content";

type CorePageHeroProps = {
  data: VukafrikPageHeroData;
};

const CorePageHero = ({ data }: CorePageHeroProps) => {
  const breadcrumbs = data.breadcrumbs ?? [
    { label: "Accueil", href: "/" },
    { label: data.title },
  ];
  const align = data.align ?? "left";
  const backgroundImage =
    data.backgroundImage ?? (data.theme === "commercial" ? heroSlideTwo : heroSlideOne);

  return (
    <section className={`vuka-page-hero vuka-page-hero--${data.theme ?? "default"}`}>
      <div
        className="vuka-page-hero__media"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      />
      <div className="vuka-page-hero__scrim" />

      <div className="container">
        <div className={`vuka-page-hero__content vuka-page-hero__content--${align}`}>
          <hr className="vuka-page-hero__divider" />
          <h1 className="td-section-title mb-18">{data.title}</h1>

          <nav className="vuka-page-hero__breadcrumbs mb-24" aria-label="Breadcrumb">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <span key={`${item.label}-${index}`} className="vuka-page-hero__breadcrumb-item">
                  {item.href && !isLast ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
                  {!isLast ? <i>/</i> : null}
                </span>
              );
            })}
          </nav>

          <p className="vuka-page-hero__text mb-30">{data.subtitle}</p>

          {data.meta?.length ? (
            <div className="vuka-page-hero__meta mb-35">
              {data.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}

          {data.actions?.length ? (
            <div className="vuka-page-hero__actions">
              {data.actions.map((action) => (
                <Link
                  key={action.label}
                  className={`td-btn td-left-right ${
                    action.variant === "secondary" ? "td-btn-3-border" : ""
                  }`}
                  href={action.href}
                >
                  <span className="mr10 td-text d-inline-block mr-5">{action.label}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CorePageHero;
