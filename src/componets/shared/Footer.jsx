const Footer = () => {
  const serviceData = [
    {
      id: 1,
      title: "Opening hours",
      subtitle: "Within 30 minutes",
      desc: "Monday - Sunday",
      icon: "/images/clock.svg",
    },
    {
      id: 2,
      title: "LET'S TALK",
      subtitle: "Phone: 1-800-222-4545",
      desc: "Fax: 1-800-222-4545",
      icon: "/images/call-alt (1).svg",
    },
    {
      id: 3,
      title: "BOOK A TABLE",
      subtitle: "Email: demo@website.com",
      desc: "Support: support@website.com",
      icon: "/images/mail.svg",
    },
    {
      id: 4,
      title: "Our Address",
      subtitle: "123 Stree New York City",
      desc: "United States Of America.",
      icon: "/images/map-pin.svg",
    },
  ];

  return (
    <div className="bg-footer-banner h-[600px] bg-cover bg-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bebas text-white text-5xl text-center py-20">
          We ready to have you the best dining experiences
        </h1>
        <div className="flex justify-between mb-24">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="items-center flex flex-col justify-center gap-y-4"
            >
              <img src={service.icon} alt={service.title} className="" />
              <div className="text-white text-center space-y-1">
                <h1 className="font-bebas text-2xl mb-2">{service.title}</h1>
                <p className="font-roboto text-sm">{service.subtitle}</p>
                <p className="font-roboto text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-x-4 mb-8">
          <img
            src="/images/facebook-circle.svg"
            className="border p-3 rounded-full"
            alt="facebook"
          />
          <img
            src="/images/facebook-circle.svg"
            className="border p-3 rounded-full"
            alt="facebook"
          />
          <img
            src="/images/facebook-circle.svg"
            className="border p-3 rounded-full"
            alt="facebook"
          />
          <img
            src="/images/facebook-circle.svg"
            className="border p-3 rounded-full"
            alt="facebook"
          />
        </div>
        <p className="font-roboto text-white text-center">© 2023 All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
