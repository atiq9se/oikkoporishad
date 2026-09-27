const images = [
  {
    src: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=600&q=80",
    alt: "Children in classroom",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    alt: "Community gathering",
    category: "Community",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    alt: "Volunteers working",
    category: "Volunteers",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
    alt: "Team effort",
    category: "Volunteers",
  },
  {
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
    alt: "Medical camp",
    category: "Healthcare",
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
    alt: "Donation drive",
    category: "Community",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
    alt: "Women learning skills",
    category: "Empowerment",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
    alt: "Children playing",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
    alt: "Water well installation",
    category: "Clean Water",
  },
];

export default function GalleryPage() {
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
