import { useState } from "react";
import quotation from "/images/“.svg";

const Testimonial = () => {
  const cards = [
    {
      id: 1,
      name: "First Slide",
      address: "Riyadh, Saudi",
      description:
        "The Chicken Mandi here is a game changer! Each bite is a delightful blend of perfectly spiced chicken and aromatic rice. The juiciness of the chicken will leave you craving for more.",
      image:
        "https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg",
    },
    {
      id: 2,
      name: "Second Slide",
      address: "Riyadh, Saudi",
      description:
        "The double-patty burger was a masterpiece. With layers of fresh lettuce, melted cheese, and perfectly grilled patties, it offered a burst of flavors in every bite. A must-try for burger lovers!",
      image:
        "https://img.freepik.com/free-photo/huge-burger-with-fried-meat-vegetables_140725-971.jpg?t=st=1731661497~exp=1731665097~hmac=c546034ca5a354a47cf084ecf53e772a72cc33a02026aec3f665ed1492a48e2a&w=740",
    },
    {
      id: 3,
      name: "Third Slide",
      address: "Riyadh, Saudi",
      description:
        "This burger redefines indulgence. The smoky flavor of the meat, paired with crispy onion rings and tangy sauces, delivers a dining experience that is simply unforgettable.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Dft9P7WYfNAQj0tWH319hfHA6qURgaL7Aw&s",
    },
    {
      id: 4,
      name: "Fourth Slide",
      address: "Riyadh, Saudi",
      description:
        "Looking for comfort food? This burger hits all the right spots! With its buttery bun and juicy filling, it’s the perfect way to satisfy your cravings.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YNVwJV-2IIK2-ZMOrNnfA0BU33gVgNX-bQ&s",
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

  const currentCard = cards[currentIndex];

  return (
    <section>
      <div className="relative max-w-7xl mb-10 mx-auto">
        {/* Top Section with Title and Buttons */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="text-brand-400 font-roboto text-sm font-bold mb-2 flex items-center gap-x-2">
              <div className="bg-brand-500 size-3"></div> Crispy, Every Bite
              Taste
            </div>
            <h2 className="text-5xl font-bebas mb-2">
              What Some of my Customers Say
            </h2>
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

        {/* Carousel Content */}
        <div className="flex bg-red-50 items-center">
          <div className="w-[40%] bg-[#FEBF00] p-16 h-[50vh] flex flex-col justify-between">
            <img src={quotation} alt="quotation" className="size-4" />
            <div className="flex-grow">
              <p className="text-gray-800 font-roboto max-w-xs pl-4 leading-8 font-medium">
                {currentCard.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-bebas text-xl">{currentCard.name}</h1>
                <h1>{currentCard.address}</h1>
              </div>
              <div>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://fdopportunities.com/wp-content/uploads/2019/12/fdo-bsherman-480x480.jpg"
                  alt="profile"
                />
              </div>
            </div>
          </div>
          <div className="w-[60%] h-[50vh] relative">
            <img
              src={currentCard.image}
              alt={currentCard.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-black/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
