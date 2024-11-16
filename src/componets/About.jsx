/* eslint-disable react/prop-types */
import AboutTabs from "./ui/Tabs";
import aboutImg from "/images/about image.png";
import { motion } from "framer-motion";

const About = () => {
  const serviceData = [
    {
      id: 1,
      title: "fast delivery",
      desc: "Within 30 minutes",
      icon: "/images/Vector.svg",
    },
    {
      id: 2,
      title: "absolute dining",
      desc: "Best buffet restaurant",
      icon: "/images/medal.svg",
    },
    {
      id: 3,
      title: "pickup delivery",
      desc: "Grab your food order",
      icon: "/images/bag.svg",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-10 2xl:mx-auto my-20">
        <div className="flex flex-col gap-y-10 xl:flex-row justify-between pb-10 lg:pb-16">
          <div className="max-w-[620px] relative">
            <img src={aboutImg} alt="burger-img" className="w-full h-auto" />

            <div className="absolute top-0 left-0 w-[50%] sm:w-[30%] sm:translate-x-5 sm:translate-y-10 transform translate-x-2 lg:translate-x-1/4 translate-y-2 lg:translate-y-1/2 bg-white flex items-center gap-2 p-4 shadow-lg rounded-lg lg:w-[40%]">
              <div className="hidden lg:block">
                <CircularProgress
                  value={80}
                  size={80}
                  strokeWidth={5}
                  fontSize={18}
                />
              </div>
              <div className="lg:hidden">
                <CircularProgress
                  value={80}
                  size={40}
                  strokeWidth={5}
                  fontSize={10}
                />
              </div>
              <div className="w-1/2">
                <span className="font-sans text-xs lg:text-lg font-semibold text-gray-700">
                  Market Experiences
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <AboutTabs />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 lg:flex-row justify-between">
          {serviceData.map((service) => (
            <div key={service.id} className="flex gap-x-5 items-center">
              <img
                src={service.icon}
                alt={service.title}
                className="p-5 bg-white drop-shadow-md rounded-full"
              />
              <div>
                <h1 className="font-bebas text-2xl">{service.title}</h1>
                <p className="font-roboto text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated Pepper Image Position */}
      <img
        src="/images/about corner.png"
        className="absolute bottom-0 right-0 transform translate-x-[60%] hidden xl:block -translate-y-28 w-80 h-auto"
        alt="pepper"
      />
    </section>
  );
};

export default About;

export const CircularProgress = ({
  value = 80,
  size = 70,
  strokeWidth = 7,
  fontSize = 14,
}) => {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <motion.svg
      width={size}
      height={size}
      className="transform"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <circle
        className="text-gray-200 opacity-25"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
      />{" "}
      <circle
        className="text-[#FEBF00] opacity-50"
        strokeWidth={strokeWidth / 2}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
      />
      <motion.circle
        className="text-[#FEBF00]"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={center}
        cy={center}
        transform={`rotate(-90 ${center} ${center})`}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dy=".3em"
        className="fill-current font-semibold"
        style={{ fontSize: `${fontSize}px` }}
      >
        {value}%
      </text>
    </motion.svg>
  );
};
