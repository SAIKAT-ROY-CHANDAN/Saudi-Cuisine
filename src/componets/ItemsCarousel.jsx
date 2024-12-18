/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const ItemsCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "vegetables burger",
      subtitle: "Barbecue Italian cuisine pizza",
      image:
        "/images/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background 1.png",
    },
    {
      id: 2,
      title: "Spacial Pizza",
      subtitle: "Barbecue Italian cuisine pizza",
      image: "/images/pizza 1.png",
    },
    {
      id: 3,
      title: "Spacial French fries ",
      subtitle: "Barbecue Italian cuisine",
      image: "/images/french-fries 1.png",
    },
    {
      id: 4,
      title: "Cuisine Chicken",
      subtitle: "Japanese Cuisine Chicken",
      image: "/images/fried-shrimp-prawn-cake-white-plate 1.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FBF7F2] py-28 hidden lg:block relative">
      <div className="relative xl:mx-auto lg:mx-10 max-w-7xl overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-brand-400 font-roboto text-sm font-bold mb-2 flex items-center gap-x-2">
              <div className="bg-brand-500 size-3"></div> Crispy, Every Bite
              Taste
            </div>
            <h2 className="text-4xl font-bebas">POPULAR FOOD ITEMS</h2>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-white text-brand-500 p-3 rounded-full drop-shadow hover:bg-brand-700 hover:text-white transition duration-300"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="bg-white text-brand-500 p-3 rounded-full drop-shadow hover:bg-brand-700 hover:text-white transition duration-300"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex transition-transform ease-in-out lg:hidden xl:block gap-x-6 duration-300">
          <div className="flex gap-x-4">
            {cards
              .concat(cards)
              .slice(currentIndex, currentIndex + 4)
              .map((card, index) => (
                <div key={index} className="bg-white p-4 w-80">
                  <div className="object-cover object-center flex items-center justify-center mx-auto">
                    <img src={card.image} alt={card.title} className="h-36" />
                  </div>
                  <div className="bg-brand-500 my-6 w-16 mx-auto h-1"></div>
                  <h3 className="text-xl text-center mb-2 font-bebas">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm text-center">
                    {card.subtitle}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex transition-transform ease-in-out xl:hidden gap-x-6 duration-300">
          {cards
            .concat(cards)
            .slice(currentIndex, currentIndex + 3)
            .map((card, index) => (
              <div key={index} className="bg-white p-4 w-80 mx-auto">
                <div className="object-cover object-center flex items-center justify-center mx-auto">
                  <img src={card.image} alt={card.title} className="h-36" />
                </div>
                <div className="bg-brand-500 my-6 w-16 mx-auto h-1"></div>
                <h3 className="text-xl text-center mb-2 font-bebas">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm text-center">
                  {card.subtitle}
                </p>
              </div>
            ))}
        </div>
      </div>

      <img
        src="/images/about corner.png"
        className="absolute bottom-0 left-0 transform translate-x-[-58%] hidden 2xl:block -translate-y-10 -rotate-45 w-96 h-auto"
        alt="pepper"
      />
    </section>
  );
};

export default ItemsCarousel;
