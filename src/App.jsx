import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CompanySection from "./components/companiesSection/CompanySection";
import FeaturesSection from "./components/featuresSection/FeaturesSection";
import PaymentSection from "./components/paymentSection/PaymentSection";
import CtaSection from "./components/ctaSection/CtaSection";
import PlansSection from "./components/plansSection/PlansSection";
import BlogSection from "./components/blogSection/BlogSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanySection />
      <FeaturesSection />
      <PaymentSection />
      <CtaSection />
      <PlansSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default App;
