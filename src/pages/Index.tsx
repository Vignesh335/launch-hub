import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Clients />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;