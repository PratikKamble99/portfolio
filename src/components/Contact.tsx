import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="section min-h-screen bg-muted/30">
      <div className="container h-full">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 h-[calc(100vh-20rem)]">
          <Card className="h-full">
            <CardContent className="h-full flex flex-col p-6">
              <form className="space-y-6 flex-1 flex flex-col">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input placeholder="Subject" />
                </div>
                <div className="space-y-2 flex-1">
                  <Textarea placeholder="Message" className="h-full min-h-[150px] resize-none" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">hello@example.com</p>
                <p className="text-muted-foreground">support@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-muted-foreground">123 Design Street</p>
                <p className="text-muted-foreground">New York, NY 10001</p>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800"
                alt="Map"
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
