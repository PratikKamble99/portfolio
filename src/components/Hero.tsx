import { useEffect, useRef } from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Simple helper to split text into spans
const splitText = (element: HTMLElement | null, type: "chars" | "words") => {
  if (!element) return { chars: [], words: [], revert: () => {} };

  const originalHTML = element.innerHTML;
  const text = element.innerText;
  let result: HTMLSpanElement[] = [];

  if (type === "chars") {
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
      element.appendChild(span);
      result.push(span);
    }
  } else if (type === "words") {
    element.innerHTML = "";
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.innerText = words[i];
      element.appendChild(span);
      if (i < words.length - 1) {
        element.appendChild(document.createTextNode(" "));
      }
      result.push(span);
    }
  }

  return {
    chars: type === "chars" ? result : [],
    words: type === "words" ? result : [],
    revert: () => {
      element.innerHTML = originalHTML;
    },
  };
};

export const HeroContent = () => {
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const headingText = splitText(headingRef.current, "words");
    const introText = splitText(introRef.current, "chars");
    const subText = splitText(subheadingRef.current, "words");

    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

    tl.from(headingText.words, {
      opacity: 0,
      y: 100,
      rotation: 5,
      duration: 1,
      stagger: 0.1,
    })
      .from(
        introText.chars,
        {
          opacity: 0,
          y: 50,
          duration: 0.6,
          stagger: 0.02,
        },
        "-=0.5"
      )
      .from(
        subText.words,
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.03,
        },
        "-=0.3"
      );

    return () => {
      headingText.revert();
      introText.revert();
      subText.revert();
      tl.kill();
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
      <h1
        ref={headingRef}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 bg-clip-text bg-gradient-to-r from-primary to-primary/70"
      >
        Let's Innovate together
      </h1>

      <p
        ref={introRef}
        className="text-3xl text-muted-foreground mb-8 max-w-2xl font-semibold"
      >
        I'm a Full-Stack Developer
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
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main animation timeline
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

    // Improved spotlight effect with throttling for smoother movement
    const spotlight = spotlightRef.current;
    let isThrottled = false;
    const throttleTime = 10; // milliseconds between updates

    if (spotlight) {
      const handleMouseMove = (e: MouseEvent) => {
        if (isThrottled) return;

        isThrottled = true;

        // Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
          const rect = spotlight.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          spotlight.style.setProperty("--mouse-x", `${x}px`);
          spotlight.style.setProperty("--mouse-y", `${y}px`);

          // Release throttle after delay
          setTimeout(() => {
            isThrottled = false;
          }, throttleTime);
        });
      };

      spotlight.addEventListener("mousemove", handleMouseMove);

      return () => {
        spotlight.removeEventListener("mousemove", handleMouseMove);
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="section min-h-[calc(100vh)] pt-16 md:pt-16 pb-16 overflow-hidden bg-gradient-to-b from-background to-background/80 relative flex items-center justify-center"
    >
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-0 spotlight pointer-events-none"
      ></div>

      <div className="container relative z-10 pointer-events-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div ref={headingRef}>
            <HeroContent />
          </div>

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
