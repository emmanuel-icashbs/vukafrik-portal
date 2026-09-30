"use client";

import Image from "next/image";
import { useState } from "react";
import ImagePopup from "@/modals/ImagePopup";
import { galleryPhotos, type GalleryActivity } from "@/data/GalleryData";
import styles from "./GalleryArea.module.scss";

type DayFilter = "all" | 1 | 2 | 3;
type ActivityFilter = "all" | GalleryActivity;

const days: { value: DayFilter; label: string }[] = [
  { value: "all", label: "Toutes les journées" },
  { value: 1, label: "Jour 1 · 23 septembre" },
  { value: 2, label: "Jour 2 · 24 septembre" },
  { value: 3, label: "Jour 3 · 25 septembre" },
];

const activities: { value: ActivityFilter; label: string }[] = [
  { value: "all", label: "Toutes les activités" },
  { value: "panel", label: "Panels" },
  { value: "exhibition", label: "Exposition" },
  { value: "hackathon", label: "Hackathon" },
  { value: "atelier", label: "Ateliers" },
];

const pageSize = 15;

export default function GalleryArea() {
  const [selectedDay, setSelectedDay] = useState<DayFilter>("all");
  const [selectedActivity, setSelectedActivity] = useState<ActivityFilter>("all");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const filteredPhotos = galleryPhotos.filter(photo =>
    (selectedDay === "all" || photo.day === selectedDay) &&
    (selectedActivity === "all" || photo.activities.includes(selectedActivity)),
  );
  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const slides = filteredPhotos.map(photo => ({
    src: photo.image,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
  }));

  const updateDay = (day: DayFilter) => {
    setSelectedDay(day);
    setVisibleCount(pageSize);
    setIsOpen(false);
  };

  const updateActivity = (activity: ActivityFilter) => {
    setSelectedActivity(activity);
    setVisibleCount(pageSize);
    setIsOpen(false);
  };

  const countForDay = (day: DayFilter) => galleryPhotos.filter(photo =>
    (day === "all" || photo.day === day) &&
    (selectedActivity === "all" || photo.activities.includes(selectedActivity)),
  ).length;

  const countForActivity = (activity: ActivityFilter) => galleryPhotos.filter(photo =>
    (selectedDay === "all" || photo.day === selectedDay) &&
    (activity === "all" || photo.activities.includes(activity)),
  ).length;

  const resetFilters = () => {
    updateDay("all");
    updateActivity("all");
  };

  return (
    <>
      <section className={styles.gallery} aria-label="Galerie photos VUK’AFRIK 2026">
        <div className="container">
          <header className={styles.heading}>
            <span className={styles.eyebrow}>VUK’AFRIK 2026 · Kinshasa</span>
            <h2>Les rencontres. Les idées.<br /><span>Les moments partagés.</span></h2>
            <p className={styles.intro}>
              Revivez les temps forts de cette première édition, du 23 au 25 septembre.
              Une collection de regards sur celles et ceux qui font avancer l’Afrique.
            </p>
          </header>

          <div className={styles.filters}>
            <fieldset className={styles.filterGroup}>
              <legend className={styles.filterLegend}>Journée</legend>
              <div className={styles.filterOptions} role="group" aria-label="Filtrer par journée">
                {days.map(day => {
                  const count = countForDay(day.value);
                  return (
                    <button
                      key={day.value}
                      type="button"
                      className={`${styles.filterButton} ${selectedDay === day.value ? styles.filterButtonActive : ""}`}
                      aria-pressed={selectedDay === day.value}
                      onClick={() => updateDay(day.value)}
                    >
                      {day.label}<span className={styles.filterCount}>{count || (day.value !== "all" && !galleryPhotos.some(photo => photo.day === day.value) ? "À venir" : 0)}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className={styles.filterGroup}>
              <legend className={styles.filterLegend}>Activité</legend>
              <div className={styles.filterOptions} role="group" aria-label="Filtrer par activité">
                {activities.map(activity => {
                  const count = countForActivity(activity.value);
                  return (
                    <button
                      key={activity.value}
                      type="button"
                      className={`${styles.filterButton} ${selectedActivity === activity.value ? styles.filterButtonActive : ""}`}
                      aria-pressed={selectedActivity === activity.value}
                      onClick={() => updateActivity(activity.value)}
                    >
                      {activity.label}<span className={styles.filterCount}>{count || (activity.value !== "all" && !galleryPhotos.some(photo => photo.activities.includes(activity.value as GalleryActivity)) ? "À venir" : 0)}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <div className={styles.toolbar}>
            <p className={styles.resultCount} role="status" aria-live="polite">
              <strong>{filteredPhotos.length}</strong> {filteredPhotos.length === 1 ? "photo" : "photos"}
              {visiblePhotos.length < filteredPhotos.length && ` · ${visiblePhotos.length} affichées`}
            </p>
            {selectedDay !== "all" || selectedActivity !== "all" ? (
              <button type="button" className={styles.resetButton} onClick={resetFilters}>Réinitialiser les filtres</button>
            ) : <span className={styles.viewHint}>Sélectionnez une photo pour l’agrandir</span>}
          </div>

          {visiblePhotos.length > 0 ? (
            <div className={styles.photoGrid}>
              {visiblePhotos.map((photo, index) => (
                  <figure key={photo.id} className={styles.photo}>
                    <button
                      type="button"
                      className={styles.photoButton}
                      aria-label={`Agrandir : ${photo.caption}`}
                      onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                    >
                      <Image
                        src={photo.image}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      <span className={styles.expand} aria-hidden="true">↗</span>
                    </button>
                    <figcaption className={styles.caption}>
                      <span className={styles.photoMeta}>
                        <span>Jour {photo.day}</span>
                        {photo.activities.map(activity => (
                          <span key={activity}>{activities.find(item => item.value === activity)?.label}</span>
                        ))}
                      </span>
                      {photo.caption}
                    </figcaption>
                  </figure>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h2>Aucune photo pour cette sélection</h2>
              <p>
                Explorez une autre journée ou une autre activité pour découvrir les photos disponibles.
              </p>
            </div>
          )}

          {visiblePhotos.length < filteredPhotos.length && (
            <div className={styles.loadMore}>
              <button type="button" className={styles.loadMoreButton} onClick={() => setVisibleCount(count => count + pageSize)}>
                Voir plus de photos
              </button>
            </div>
          )}
        </div>
      </section>

      {isOpen && (
        <ImagePopup images={slides} isOpen={isOpen} setIsOpen={setIsOpen} photoIndex={photoIndex} />
      )}
    </>
  );
}
