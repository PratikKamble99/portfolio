
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Index = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Add smooth scrolling to all sections with improved performance
    const sections = document.querySelectorAll("section");
    
    // Create a single scroll listener for better performance
    const checkScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = 
          rect.top < window.innerHeight * 0.8 && 
          rect.bottom > 0;
          
        if (isVisible && !section.classList.contains("active")) {
          section.classList.add("active");
        }
      });
    };
    
    // Initial check
    checkScroll();
    
    // Optimize scroll listener with requestAnimationFrame
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Set up global mouse tracking for spotlight effects
    const handleGlobalMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      // Clean up
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
