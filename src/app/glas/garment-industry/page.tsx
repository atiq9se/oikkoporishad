export default function GarmentIndustryPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">About Garment Industry of Bangladesh</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Understanding Bangladesh's leading export sector
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                The readymade garments industry acts as a catalyst for the development of Bangladesh.
                The &quot;Made in Bangladesh&quot; tag has also brought glory for the country, making it
                a prestigious brand across the globe. Bangladesh, which was once termed by cynics a
                &quot;bottomless basket&quot; has now become a &quot;basket full of wonders.&quot; The country
                with its limited resources has been maintaining 6% annual average GDP growth rate and
                has brought about remarkable social and human development.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                After the independence in 1971, Bangladesh was one of poorest countries in the world.
                No major industries were developed in Bangladesh, when it was known as East Pakistan,
                due to discriminatory attitude and policies of the government of the then West Pakistan.
                So, rebuilding the war-ravaged country with limited resources appeared to be the
                biggest challenge.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                The industry that has been making crucial contribution to rebuilding the country and
                its economy is none other than the readymade garment (RMG) industry which is now the
                single biggest export earner for Bangladesh. The sector accounts for 83% of total
                export earnings of the country.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                When our only major export earner &quot;the jute industry&quot; started losing its golden
                days, it is the RMG sector that replaced it, and then, to overtake it.
              </p>
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                  <img
                    src="/images/garment-industry/rmg-bangladesh.jpg"
                    alt="Workers sewing garments at a factory in Bangladesh"
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 text-sm text-text-light">
                    Workers at a readymade garment factory in Bangladesh
                  </figcaption>
                </figure>
                <figure className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                  <img
                    src="/images/garment-industry/denim-qa-checking.jpg"
                    alt="Garment workers checking finished denim products on a factory floor"
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 text-sm text-text-light">
                    Quality checking of finished garments before export
                  </figcaption>
                </figure>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                The apparel industry of Bangladesh started its journey in the 1980s and has come to
                the position it is in today. The late NuroolQuader Khan was the pioneer of the
                readymade garment industry in Bangladesh. He had a vision of how to transform the
                country. In 1978, he sent 130 trainees to South Korea where they learned how to
                produce readymade garments.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                With those trainees, he set up the first factory &quot;Desh Garments&quot; to produce
                garments for export. At the same time, the late Akhter Mohammad Musa of Bond
                Garments, the late Mohammad Reazuddin of Reaz Garments, MdHumayun of Paris Garments,
                Engineer Mohammad Fazlul Azim of Azim Group, Major (Retd) Abdul Mannan of Sunman
                Group, M Shamsur Rahman of Stylecraft Limited, the first President of BGMEA, AM Subid
                Ali of Aristocrat Limited also came forward and established some of the first garment
                factories in Bangladesh.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                Following their footsteps, other prudent and hardworking entrepreneurs started RMG
                factories in the country. Since then, Bangladeshi garment industry did not need to
                look behind. Despite many difficulties faced by the sector over the past years, it has
                carved a niche in world market and kept continuing to show robust performance.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                Since the early days, different sources of impetus have contributed to the development
                and maturity of the industry at various stages. We learned about child-labour in 1994,
                and successfully made the industry free from child labour in 1995.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-text-light">
                The MFA-quota was a blessing to our industry to take root, gradually develop and
                mature. While the quota was approaching to an end in 2004, it was predicted by many
                that the phase-out would incur a massive upset in our export.
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                However, the post-MFA era is another story of success. Proving all the predictions
                wrong, we conquered the post-MFA challenges. Now the apparel industry is Bangladesh&apos;s
                biggest export earner with value of over $27.9 billion of exports in 2019-20 financial
                year.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}