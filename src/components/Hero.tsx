import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
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
  const greetingRef = useRef(null);
  const headingRef = useRef(null);
  const headingEmphasisRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const greetingText = splitText(greetingRef.current, "chars");
    const headingText = splitText(headingRef.current, "words");
    const headingEmphasisText = splitText(headingEmphasisRef.current, "words");
    const subText = splitText(subheadingRef.current, "words");

    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

    tl.from(greetingText.chars, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.02,
    })
      .from(
        headingText.words,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.08,
        },
        "-=0.3"
      )
      .from(
        headingEmphasisText.words,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.08,
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
      greetingText.revert();
      headingText.revert();
      headingEmphasisText.revert();
      subText.revert();
      tl.kill();
    };
  }, []);

  return (
    <div className="flex flex-col items-start text-left">
      <h3 ref={greetingRef} className="text-xl font-medium mb-4">
        Hello! I'm Pratik.
      </h3>

      <div className="mb-6">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
        >
          I build fast, scalable, and reliable web apps —
        </h1>
        <h1
          ref={headingEmphasisRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-muted-foreground/70"
        >
          frontend to backend.
        </h1>
      </div>

      <p
        ref={subheadingRef}
        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
      >
        I specialize in crafting modern UIs, building secure APIs, and
        optimizing database-driven systems for real-world impact.
      </p>
    </div>
  );
};

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Main animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    ).fromTo(
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
      className="section min-h-[calc(100vh)] pt-16 md:pt-16 pb-16 overflow-hidden bg-gradient-to-b from-background to-background/80 relative flex items-center"
    >
      <div
        ref={spotlightRef}
        className="absolute inset-0 z-0 spotlight pointer-events-none"
      ></div>

      <div className="container relative z-10 pointer-events-auto">
        <div className="flex flex-col items-start ">
          <div ref={contentRef}>
            <HeroContent />
          </div>

          <div ref={ctaRef} className="mt-8">
            <a href="#contact">
              <Button size="lg" className="gap-2 text-base px-8 py-6">
                Let's Talk <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
