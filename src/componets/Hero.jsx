const Hero = () => {
  return (
    <section className="bg-hero-banner min-h-screen bg-[#BD1F17] bg-cover bg-center pt-24 mb-10">
      <div className="max-w-7xl mx-10 gap-y-10 2xl:mx-auto lg:mt-10 flex flex-col lg:flex-row items-center relative justify-between">
        <div className="text-white max-w-lg space-y-4 xl:space-y-0">
          <h1 className="font-bebas text-5xl lg:text-7xl xl:text-9xl lg:absolute lg:z-10 xl:top-28 max-w-4xl lg:max-w-2xl xl:max-w-4xl bg-gradient-to-r from-[#BD1F17]/5 via-[#BD1F17]/10 to-[#BD1F17]/40">
            Taste the authentic Saudi cuisine
          </h1>
          <div className="lg:translate-y-36 xl:translate-y-32">
            <p className="text-lg xl:text-xl font-roboto mb-6">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>

            <button className="bg-[#FEBF00] uppercase p-3 text-sm font-roboto text-[#0A1425] font-bold">
              Explore Menu
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/hero-image.png"
            alt="Hero Image"
            className="w-full h-auto sm:max-w-lg lg:max-w-lg xl:max-w-2xl"
          />
          <div className="absolute bottom-0 right-0 -translate-y-1/4 -translate-x-1/4 lg:translate-x-1/3 lg:translate-y-1/3 bg-[#FEBF00] font-bebas size-28 text-2xl rounded-full flex items-center justify-center p-6">
            <h1 className="text-center text-2xl rounded-full px-6 py-3 border-4 border-dotted border-[#BD1F17]">
              Today Offer
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
