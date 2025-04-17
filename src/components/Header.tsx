
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Logo = () => (
  <div className="flex items-center gap-2">
    <img
      className="h-10 w-10 rounded-full outline outline-offset-2 outline-primary"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <a href="#" className="text-2xl font-display font-bold">
      Pratik Kamble
    </a>
  </div>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center">
          <div className={`flex gap-1 px-4 py-2 rounded-full ${scrolled ? "bg-muted/50" : "bg-muted/30 backdrop-blur-md"}`}>
            {navItems.map((item) => (
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
          <a href="#contact">
            <Button className="hidden md:flex">Get in Touch</Button>
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
        <div className="fixed inset-0 z-50 bg-background">
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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact">
              <Button className="mt-4">Get in Touch</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
