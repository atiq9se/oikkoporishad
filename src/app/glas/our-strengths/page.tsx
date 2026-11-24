export default function OurStrengthsPage() {
  return (
    <>
      <section
        className="animate-fade-in-up opacity-0 flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')",
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Industry Strengths</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Why Bangladesh is a trusted global apparel sourcing hub
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-8 text-lg leading-relaxed text-text-light">
                <span className="text-2xl font-bold text-dark">Bangladesh</span> is a trusted hub
                of apparel sourcing across the globe. More than{" "}
                <span className="text-2xl font-bold text-dark">150</span> countries import
                ready-made garments from Bangladesh for:
              </p>

              <figure className="mb-12 overflow-hidden rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-8">
                <img
                  src="/images/our-strengths-diagram.png"
                  alt="Diagram of Bangladesh's apparel industry strengths: 37 years of experience, competitive price, quality, workforce, safe, green, commitment, market access, versatility and backward linkage"
                  className="mx-auto h-auto w-full max-w-3xl object-contain"
                  loading="lazy"
                />
                <figcaption className="mt-4 text-center text-sm text-text-light">
                  The ten pillars of Bangladesh&apos;s readymade garment industry
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
