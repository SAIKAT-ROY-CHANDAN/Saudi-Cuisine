const Hero = () => {
  return (
    <section className="bg-hero-banner min-h-screen bg-[#BD1F17] bg-cover bg-center pt-24 mb-10">
      <div className="max-w-7xl mx-10 gap-y-10 2xl:mx-auto lg:mt-10 flex flex-col lg:flex-row items-center relative justify-between">
        <div className="text-white max-w-lg space-y-4 xl:space-y-0">
          <h1 className="font-bebas text-5xl lg:text-7xl xl:text-9xl lg:absolute xl:top-28 max-w-4xl lg:max-w-2xl xl:max-w-4xl bg-gradient-to-r from-[#BD1F17]/5 via-[#BD1F17]/10 to-[#BD1F17]/40">
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

        <div className="flex justify-center items-center">
          <img
            src="/images/hero-image.png"
            alt="Hero Image"
            className="w-full h-auto sm:max-w-lg lg:max-w-lg xl:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
