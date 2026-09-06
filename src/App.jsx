import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MeetMarci from "./components/MeetMarci";
import LogoCarousel from "./components/LogoCarousel";
import GetItSold from "./components/GetItSold";
import Services from "./components/Services";
import PropertySearch from "./components/PropertySearch";
import PhotoGallery from "./components/PhotoGallery";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="relative bg-neutral-50">
        <Hero />
        <MeetMarci />
        <LogoCarousel />
        <GetItSold />
        <Services />
        <PropertySearch />
        <PhotoGallery />
        <SocialLinks />
        <Contact />
        <Map />
        <Footer />
      </main>
    </>
  );
}

export default App;
