const Hero = () => {
  return (
    <section id="#home" className="bg-hero-banner min-h-screen bg-[#BD1F17] bg-cover bg-center pt-24 mb-10">
      <div className="max-w-7xl mx-auto mt-10 flex items-center relative justify-between">
        <div className="text-white max-w-lg">
          <h1 className="font-bebas text-9xl absolute top-28 max-w-4xl bg-gradient-to-r from-[#BD1F17]/5 via-[#BD1F17]/10 to-[#BD1F17]/40">
            Taste the authentic Saudi cuisine
          </h1>
          <div className="translate-y-32">
            <p className="text-xl font-roboto mb-6">
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
            src="../../images/hero-image.png"
            alt="Hero Image"
            className="w-full h-auto max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
