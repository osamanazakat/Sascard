import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CompanySection from "./components/companiesSection/CompanySection";
import FeaturesSection from "./components/featuresSection/FeaturesSection";
import PaymentSection from "./components/paymentSection/PaymentSection";
import CtaSection from "./components/ctaSection/CtaSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanySection />
      <FeaturesSection />
      <PaymentSection />
      <CtaSection />
    </>
  );
}

export default App;
