import Contact from "./components/Contact";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import TopBar from "./components/TopBar";


export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection/>
      <FeaturesSection />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
