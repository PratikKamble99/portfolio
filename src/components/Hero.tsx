
import { useEffect, useRef } from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        laptopRef.current,
        { y: 100, rotateX: 45, opacity: 0 },
        { y: 0, rotateX: 0, opacity: 1, duration: 1.2 },
        "-=0.4"
      );

    // Laptop scroll animation
    ScrollTrigger.create({
      trigger: laptopRef.current,
      start: "top center",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        if (laptopRef.current) {
          gsap.to(laptopRef.current, {
            rotateX: self.progress * 30,
            y: self.progress * 50,
            duration: 0.5,
          });
        }
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="section min-h-screen pt-28 md:pt-36 overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
          >
            Let's work<br />together
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            I build exceptional digital experiences that inspire and connect with your audience, 
            turning your vision into reality with modern technologies.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="gap-2 text-base px-8 py-6">
              View Projects <ArrowDownCircle className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              Contact Me
            </Button>
          </div>
          
          <div 
            ref={laptopRef}
            className="relative w-full max-w-3xl mx-auto mt-4 perspective-1000"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-primary/10 shadow-lg rounded-lg p-6 transform-gpu transition-transform duration-500">
              <div className="bg-muted/30 rounded-md p-2 font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <span className="flex gap-1">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                  <span>terminal</span>
                </div>
                <div className="text-left">
                  <span className="text-primary/80">$</span> <span className="text-primary">npx create-portfolio@latest init</span>
                  <div className="blink-cursor inline-block h-5 w-2 ml-1 bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
