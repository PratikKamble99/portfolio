
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="section pt-28 md:pt-36 overflow-hidden">
      <div className="container">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Creative Developer & Designer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              I build exceptional digital experiences that inspire and connect with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                View Projects <ArrowDownCircle className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-primary/5 dark:bg-primary/10 aspect-square rounded-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800"
                alt="Hero image"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60"></div>
            </div>
            <div className="absolute -bottom-4 right-12 px-6 py-4 bg-card shadow-lg rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
