import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Map from "./Map";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/schemas/contactSchema";
import { toast } from "@/components/ui/sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY,
        {
          from_name: data.name,
          to_name: "Pratik Kamble",
          from_email: data.email,
          to_email: import.meta.env.VITE_EMAIL_JS_TO_EMAIL,
          message: data.message,
        },
        "DyLtGTRbtEuUC0G_S"
      );

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section min-h-screen bg-muted/30">
      <div className="container h-full">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and
            let's create something amazing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="h-full">
            <CardContent className="h-full flex flex-col p-6">
              <Form {...form}>
                <form
                  ref={formRef}
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 flex-1 flex flex-col"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="What's your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="What's your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Textarea
                            placeholder="What do you want to say"
                            className="h-full min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">
                  kamblepratik1137@gmail.com
                </p>
                {/* <p className="text-muted-foreground">support@example.com</p> */}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 758-857-2178</p>
                {/* <p className="text-muted-foreground">+1 (555) 987-6543</p> */}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-muted-foreground">Bavdhan, Pune</p>
                <p className="text-muted-foreground">
                  Maharastra, India, 11023
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center items-center h-[300px]">
              {/* <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800"
                alt="Map"
                className="w-full h-auto rounded-lg object-cover aspect-video"
              /> */}
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
