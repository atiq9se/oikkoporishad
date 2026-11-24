import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section
        className="animate-fade-in-up flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')",
        }}
      >
        <div className="container-custom text-center text-white">
          <nav className="mb-6 inline-flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-yellow-300 hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-300">OIKKO PARISHAD At a Glance</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">OIKKO PARISHAD At a Glance</h1>
        </div>
      </section>

      <section className="animate-fade-in-up py-20">
        <div className="container-custom">
          <div className="mx-auto mb-16 w-full text-center">
            <div className="text-left space-y-8 text-lg leading-relaxed text-text-light">
              <div>
                <p>
                  The Bangladesh Garment Manufacturers and Exporters Association (BGMEA) is one of the largest trade associations in the country representing the readymade garment industry, particularly the woven garments, knitwear and sweater sub-sectors with equal importance. Starting its journey in 1983 today BGMEA takes care of an industry that is at the backbone of Bangladesh’s economy. Since the inception, BGMEA is dedicated to promote and facilitate the apparel industry through policy advocacy to the government, services to members, ensuring workers’ rights and social compliance at factories. BGMEA collaborates with local and international stakeholders, including brands and development partners to pave the way for development of Bangladesh apparel industry. Currently, BGMEA has around four thousand registered garment factories.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-bold text-primary">Mission</h3>
                <p>
                  BGMEA works with the vision to develop the RMG industry of Bangladesh and the economy of the country. Having such vision BGMEA chalked out the following missions and its strategic direction is paved accordingly –

                  Firstly, to protect and promote the interests of the industry; thus ensuring a sustained growth in the foreign exchange earnings of the country.

                  Secondly, BGMEA is committed to ensure all legitimate rights and privileges of the garment workers. The association also strives toward the betterment of the society and environment.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-bold text-primary">Members</h3>
                <p>
                  BGMEA started with only 12 members in early 1980's and presently has around 4500 member factories. Around 40% of BGMEA member factories are knitwear and sweater manufactures, and the rest 60% are woven garment manufactures. BGMEA member factories account for 100% woven garment exports of the country and more than 95% of sweater exports, while around half of the light knitwear exports are made by them.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-2xl font-bold text-primary">How Oikko Parishad Runs</h3>
                <p>
                  BGMEA is being run by a 35-member elected Board of Directors. The Board of Directors is elected for a two-year term. Seven Vice Presidents having important portfolios, along with a secretariat of experienced officials, assists the President in formulating and executing vital policies and programs of the organization.  The President is the highest executive authority of the association. The Board of Directors takes assistance from different Standing Committees headed by a Chairman and composed of members having vast experience in the related fields. Strict adherence to democratic norms and code of conduct are being maintained in the BGMEA elections, which has been regarded as a trend setter in trade body elections of Bangladesh for its pre-election projection caucus and election-day discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
