import { useEffect, useRef } from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const HeroContent = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const introRef = useRef(null); // Added for the intro paragraph

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(introRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4,
    });

    gsap.from(subheadingRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.6,
    });
  }, []);

  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      <h1
        ref={headingRef}
        className="h-[200px] text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
      >
        Let’s Innovate
        <br />
        together
      </h1>

      <p
        ref={introRef}
        className="text-3xl text-muted-foreground mb-8 max-w-2xl font-semibold"
      >
        👋 I’m a Full-Stack Developer
      </p>

      <p
        ref={subheadingRef}
        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
      >
        I engineer robust, scalable, and high-performance web applications from
        frontend to backend. I specialize in crafting modern UIs, building
        secure APIs, and optimizing database-driven systems for real-world
        impact.
      </p>
    </div>
  );
};

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
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="section min-h-screen pt-28 md:pt-36 overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <HeroContent />

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#projects">
              <Button size="lg" className="gap-2 text-base px-8 py-6">
                View Projects <ArrowDownCircle className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6"
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
