import AboutTabs from "./ui/Tabs";
import aboutImg from "/images/about image.png";

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
    <section id="about">
      <div className="max-w-7xl mx-10 2xl:mx-auto my-20">
        <div className="flex flex-col gap-y-10 xl:flex-row justify-between pb-10 lg:pb-16">
          <div className="max-w-[620px]">
            <img src={aboutImg} alt="burger-img" />
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
    </section>
  );
};

export default About;
