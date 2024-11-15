import About from "./componets/About";
import Contact from "./componets/Contact";
import Hero from "./componets/Hero";
import ItemsCarousel from "./componets/ItemsCarousel";
import Footer from "./componets/shared/Footer";
import Nav from "./componets/shared/Nav";
import Testimonial from "./componets/testimonial";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <ItemsCarousel />
      <Contact />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
