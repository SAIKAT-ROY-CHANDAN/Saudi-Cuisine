import About from "./componets/About";
import Contact from "./componets/Contact";
import Hero from "./componets/Hero";
import ItemsCarousel from "./componets/ItemsCarousel";
import Nav from "./componets/shared/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <ItemsCarousel />
      <Contact />
    </>
  );
}

export default App;
