import Image from "next/image";
import { Icon } from "@/components/Icon";
import { profile } from "@/content/portfolio";

/** Brief §5.2: split hero, copy left, portrait right (stacked on mobile). */
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.heroEyebrow}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-headline">{profile.heroHeadline}</p>
          <p className="hero-summary">{profile.heroSummary}</p>
          <div className="actions">
            <a className="btn btn--primary" href="#contact">
              Discuss a Project <Icon name="arrowRight" />
            </a>
            <a className="btn btn--hero" href="#work">
              Explore My Work
            </a>
          </div>
          <p className="hero-meta">
            <Icon name="pin" /> {profile.heroMeta}
          </p>
        </div>

        <figure className="portrait-card">
          <div className="portrait-frame">
            {profile.portrait ? (
              // On mobile the portrait sits below the copy, so it is not always
              // the LCP element; eager loading beats a viewport-blind preload.
              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                sizes="(max-width: 767px) min(90vw, 368px), 448px"
                loading="eager"
              />
            ) : (
              // Typographic MR treatment until an owner-approved portrait exists
              // (brief §6). Never substitute a stock photo.
              <div className="portrait-placeholder" aria-hidden="true">
                {profile.initials}
              </div>
            )}
          </div>
          <figcaption className="portrait-caption">{profile.portraitCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
