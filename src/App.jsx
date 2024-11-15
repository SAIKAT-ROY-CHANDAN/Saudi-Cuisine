import Nav from "./componets/shared/Nav";
import Hero from "./componets/Hero";
import About from "./componets/About";
import ItemsCarousel from "./componets/ItemsCarousel";
import Contact from "./componets/Contact";
import Footer from "./componets/shared/Footer";
import Testimonial from "./componets/Testimonial";
import MobileItemsCarousel from "./componets/MobileItemsCarousel";


function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <ItemsCarousel />
      <MobileItemsCarousel />
      <Contact />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
