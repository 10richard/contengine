import CalendlyBooking from "./components/CalendlyBooking";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Expectations from "./components/Expectations";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Trusted from "./components/Trusted/Trusted";
import WhoIsThisFor from "./components/WhoIsThisFor";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trusted />
      <WhoIsThisFor />
      <Expectations />
      <CaseStudies />
      <HowItWorks />
      <Faq />
      <CalendlyBooking />
      <Footer />
    </>
  );
}
