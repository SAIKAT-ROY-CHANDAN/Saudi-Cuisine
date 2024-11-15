const Hero = () => {
  return (
    <section className="bg-hero-banner min-h-screen bg-[#BD1F17] bg-cover bg-center pt-24">
      <div className="max-w-7xl mx-auto mt-10 flex items-center relative justify-between">
        <div className="text-white max-w-lg">
          <h1 className="font-bebas text-9xl absolute top-28 max-w-4xl bg-red-600/20">
            Taste the authentic Saudi cuisine
          </h1>
          <p className="text-xl font-roboto translate-y-28">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>

          <button className="bg-[#FEBF00] p-3 text-sm font-roboto font-bold">
            BOOK A TABLE
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="../../public/images/hero-image.png"
            alt="Hero Image"
            className="w-full h-auto max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
