
import { useEffect, useRef } from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Simple helper to split text into spans
const splitText = (element: HTMLElement | null, type: 'chars' | 'words') => {
  if (!element) return { chars: [], words: [], revert: () => {} };
  
  const originalHTML = element.innerHTML;
  const text = element.innerText;
  let result: HTMLSpanElement[] = [];
  
  if (type === 'chars') {
    element.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.innerHTML = text[i] === ' ' ? '&nbsp;' : text[i];
      element.appendChild(span);
      result.push(span);
    }
  } else if (type === 'words') {
    element.innerHTML = '';
    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.innerText = words[i];
      element.appendChild(span);
      if (i < words.length - 1) {
        element.appendChild(document.createTextNode(' '));
      }
      result.push(span);
    }
  }
  
  return { 
    chars: type === 'chars' ? result : [],
    words: type === 'words' ? result : [],
    revert: () => { element.innerHTML = originalHTML; }
  };
};

export const HeroContent = () => {
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    // Text split and animation using our custom function
    const headingText = splitText(headingRef.current, 'chars');
    const introText = splitText(introRef.current, 'chars');
    const subText = splitText(subheadingRef.current, 'words');

    gsap.from(headingText.chars, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.03,
      ease: "back.out",
    });

    gsap.from(introText.chars, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.02,
      delay: 0.8,
    });

    gsap.from(subText.words, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      delay: 1.2,
    });

    return () => {
      headingText.revert();
      introText.revert();
      subText.revert();
    };
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
