import { useState, useRef, useEffect } from "react";

export default function AboutTabs() {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
          setTabSelected((prev) => ({
            ...prev,
            currentTab: prev.currentTab < prev.noTabs ? prev.currentTab + 1 : 1,
          }));
        }
      }

      if (e.keyCode === 37) {
        if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
          setTabSelected((prev) => ({
            ...prev,
            currentTab: prev.currentTab > 1 ? prev.currentTab - 1 : prev.noTabs,
          }));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const tabsData = [
    {
      id: 1,
      label: "About",
      content: "Exceptional culinary experience and delicious food",
    },
    {
      id: 2,
      label: "Experience",
      content: "A Deep-Rooted Commitment to Quality and Detail",
    },
    {
      id: 3,
      label: "Contact",
      content: "Reach Out to Begin Your Flavorful Journey",
    },
  ];

  return (
    <section className="max-w-full" aria-multiselectable="false">
      <ul
        className="flex items-center gap-2 border-b"
        role="tablist"
        ref={wrapperRef}
      >
        {tabsData.map((tab) => (
          <li key={tab.id} role="presentation">
            <button
              className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === tab.id
                  ? "bg-brand-500 text-white hover:bg-brand-600 focus:bg-brand-500 disabled:bg-brand-300"
                  : "w-full justify-self-center stroke-slate-700 text-black hover:bg-brand-50 hover:stroke-brand-500 hover:text-brand-500 focus:bg-brand-50 focus:stroke-brand-600 focus:text-brand-600 disabled:text-brand-300"
              }`}
              id={`tab-label-${tab.id}e`}
              role="tab"
              aria-setsize="3"
              aria-posinset={tab.id}
              tabIndex={`${tabSelected.currentTab === tab.id ? "0" : "-1"}`}
              aria-controls={`tab-panel-${tab.id}e`}
              aria-selected={tabSelected.currentTab === tab.id}
              onClick={() =>
                setTabSelected({ ...tabSelected, currentTab: tab.id })
              }
            >
              <span className="font-roboto text-justify">{tab.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div>
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`py-8 ${
              tabSelected.currentTab === tab.id ? "" : "hidden"
            }`}
            id={`tab-panel-${tab.id}e`}
            aria-hidden={tabSelected.currentTab === tab.id ? "false" : "true"}
            role="tabpanel"
            aria-labelledby={`tab-label-${tab.id}e`}
            tabIndex="-1"
          >
            <h1 className="font-bebas text-5xl mb-4">{tab.content}</h1>
            <p className="text-gray-800 font-normal mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>

            <div className="flex max-w-xs items-center justify-between">
              <button className="bg-[#FEBF00] uppercase p-3 text-sm font-roboto text-[#0A1425] font-bold">
                About More
              </button>
              <div className="flex gap-x-3">
                <img src="/public/images/call-alt.svg" alt="call" className="size-6" />
                <p className="font-roboto text-[#0A1425] font-bold">+88 3426 739 485</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
