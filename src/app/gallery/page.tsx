import { galleryPhotos } from "@/data/gallery";

export default function GalleryPage() {
  const images = galleryPhotos;
  return (
    <>
      <section
        className="flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')",
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Gallery</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Moments captured from our programs and community events.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative mb-6 overflow-hidden rounded-xl break-inside-avoid shadow-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                  <div>
                    <p className="text-sm font-medium text-white">
                      {image.alt}
                    </p>
                    <span className="mt-1 inline-block rounded-full bg-secondary/80 px-3 py-0.5 text-xs font-semibold text-dark">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
