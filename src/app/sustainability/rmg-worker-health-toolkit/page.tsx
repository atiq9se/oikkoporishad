export default function RmgWorkerHealthToolkitPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">RMG Worker Health Toolkit</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Comprehensive health resources, tools, and guidelines for RMG worker wellbeing
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="prose prose-gray dark:prose-invert max-w-none"></div>
          </div>
        </div>
      </section>
    </>
  );
}
