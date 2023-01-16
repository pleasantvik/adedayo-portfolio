import "./resources/styles.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Featured } from "./components/featured";
import { VenueNfo } from "./components/venueNfo";
import { Highlights } from "./components/highlights";
import { Pricing } from "./components/pricing";
import { Element } from "react-scroll";
import { Contact } from "./components/highlights/Contact";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venueinfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
