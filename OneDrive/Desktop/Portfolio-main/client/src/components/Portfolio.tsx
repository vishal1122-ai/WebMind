import { useEffect } from "react";
import FloatingNav from "./FloatingNav";
import Hero from "./Hero";
import About from "./About";
import PortfolioSection from "./PortfolioSection";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import ChatModal from "./ChatModal";
import { initializeScrollAnimations } from "@/lib/animations";

export default function Portfolio() {
  useEffect(() => {
    // Initialize all scroll-triggered animations
    const timer = setTimeout(() => {
      initializeScrollAnimations();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <PortfolioSection />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <ChatModal />
    </main>
  );
}
