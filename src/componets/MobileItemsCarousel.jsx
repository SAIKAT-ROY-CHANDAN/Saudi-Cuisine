/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const MobileItemsCarousel = () => {
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
    <section className="bg-[#FBF7F2] py-20 lg:hidden">
      <div className="relative lg:mx-auto mx-10 max-w-7xl overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-brand-400 font-roboto text-sm font-bold mb-2 flex items-center gap-x-2">
              <div className="bg-brand-500 size-3"></div> Crispy, Every Bite
              Taste
            </div>
            <h2 className="text-4xl font-bebas">POPULAR FOOD ITEMS</h2>
          </div>
        </div>

        <div className="transition-transform ease-in-out hidden sm:block lg:hidden duration-300 mb-4">
          <div className="flex gap-x-4">
            {cards
              .concat(cards)
              .slice(currentIndex, currentIndex + 2)
              .map((card, index) => (
                <div key={index} className="bg-white mx-auto p-4 w-80">
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
        <div className="transition-transform ease-in-out sm:hidden duration-300 mb-4">
          {cards
            .concat(cards)
            .slice(currentIndex, currentIndex + 1)
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
        <div className="flex gap-4 justify-center">
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
    </section>
  );
};

export default MobileItemsCarousel;
