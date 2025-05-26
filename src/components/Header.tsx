import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { NAV_ITEMS, RESUME_LINK } from "@/data";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <a href="#" className="text-2xl font-display font-bold">
      Pratik Kamble
    </a>
  </div>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Add spotlight effect
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
        window.removeEventListener("scroll", handleScroll);
        spotlight.removeEventListener("mousemove", handleMouseMove);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        mobileMenuRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        }
      );

      // Stagger animate nav items
      tl.fromTo(
        navItemsRef.current,
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.2"
      );

      if (mobileMenuOpen) {
        tl.play();
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container relative z-10 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center">
          <div
            className={`flex gap-1 px-4 py-2 rounded-full ${
              scrolled ? "bg-muted/50" : "bg-muted/30 backdrop-blur-md"
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium px-4 py-2 rounded-full transition-colors hover:bg-muted-foreground/10"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="hidden md:flex">Download My Resume</Button>
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="fixed inset-0 z-50 bg-background">
          <div className="container flex h-16 items-center justify-between">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-8 border-b bg-background">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
                ref={(el) => el && (navItemsRef.current[index] = el)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="mt-4">Download My Resume</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
