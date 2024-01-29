import CalendlyBooking from "./components/CalendlyBooking";
import Expectations from "./components/Expectations";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Results from "./components/Results/Results";
import WhoIsThisFor from "./components/WhoIsThisFor";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Results />
      <WhoIsThisFor />
      <Expectations />
      <HowItWorks />
      <Faq />
      <CalendlyBooking />
      <Footer />
    </>
  );
}
