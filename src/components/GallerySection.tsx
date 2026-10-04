"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { VenoBoxInstance } from "venobox";
import { useLanguage } from "@/context/LanguageContext";
import { galleryPhotos, galleryVideos } from "@/data/gallery";
import "venobox/dist/venobox.min.css";

type GalleryTab = "photo" | "video";

export default function GallerySection() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<GalleryTab>("photo");

  useEffect(() => {
    let instance: VenoBoxInstance | undefined;
    let cancelled = false;

    import("venobox/src/venobox.esm.js").then(({ default: VenoBox }) => {
      if (cancelled) return;

      instance = new VenoBox({
        selector: ".venobox",
        numeration: true,
        infinigall: true,
        spinner: "chase",
        spinColor: "#f5a623",
        overlayColor: "rgba(17, 26, 22, 0.92)",
        navigation: true,
        navKeyboard: true,
        navTouch: true,
        navSpeed: 300,
        overlayClose: true,
        ratio: "16x9",
        maxWidth: "100%",
        fitView: true,
        titlePosition: "bottom",
        focusItem: true,
      });
    });

    return () => {
      cancelled = true;
      instance?.close();
    };
  }, [tab]);

  return (
    <section className="animate-fade-in-up opacity-0 bg-accent py-20">
      <div className="container-custom">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              {t("home.gallery")}
            </h2>
            <div className="h-1 w-20 rounded bg-secondary" />
          </div>

          <div
            role="tablist"
            aria-label="Gallery type"
            className="flex shrink-0 gap-1 rounded-lg border border-primary/20 bg-white p-1"
          >
            {(
              [
                { id: "photo", label: t("home.galleryPhoto") },
                { id: "video", label: t("home.galleryVideo") },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                onClick={() => setTab(item.id)}
                className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
                  tab === item.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-primary hover:bg-primary/10"
                }`}
              >
                {item.id === "photo" ? (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {tab === "photo" ? (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {galleryPhotos.map((photo, index) => (
              <a
                key={photo.id}
                href={photo.fullSrc}
                data-gall="gallery-photos"
                data-title={photo.alt}
                data-maxwidth="1200px"
                className="venobox animate-fade-in-up opacity-0 group relative mb-6 block break-inside-avoid overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${(index % 6 + 1) * 80}ms` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                  <span className="flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </span>
                </span>
                <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-white">{photo.alt}</span>
                    <span className="mt-1 inline-block rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-dark">
                      {photo.category}
                    </span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryVideos.map((video, index) => (
              <a
                key={video.id}
                href={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                data-vbtype="iframe"
                data-gall="gallery-videos"
                data-title={video.title}
                data-maxwidth="1100px"
                className="venobox animate-fade-in-up opacity-0 group block overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                style={{ animationDelay: `${(index % 6 + 1) * 80}ms` }}
              >
                <span className="relative block aspect-video overflow-hidden bg-black">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                      <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span className="absolute bottom-3 right-3 rounded bg-black/75 px-2 py-0.5 text-xs font-semibold text-white">
                    {video.duration}
                  </span>
                </span>
                <span className="block p-5">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                    {video.category}
                  </span>
                  <span className="mt-3 block text-base font-bold text-dark transition-colors duration-300 group-hover:text-primary">
                    {video.title}
                  </span>
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            {t("home.viewAllGallery")}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
