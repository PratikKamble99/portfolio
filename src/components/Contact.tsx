import { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Map from "./Map";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  // Validation function
  const validateForm = (formData) => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
      subject: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate on change (optional, for real-time feedback)
    const newErrors = validateForm({
      ...form,
      [name]: value,
    });
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(form);

    // Check if there are any errors
    if (Object.values(newErrors).every((error) => error === "")) {
      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
          import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY,
          {
            from_name: form.name,
            to_name: "Pratik Kamble",
            from_email: form.email,
            to_email: import.meta.env.VITE_EMAIL_JS_TO_EMAIL,
            message: form.message,
          },
          "DyLtGTRbtEuUC0G_S"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible,");
            setForm({
              name: "",
              email: "",
              message: "",
              subject: "",
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("something went wrong.");
          }
        );
    } else {
      setErrors(newErrors);
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
              <form
                className="space-y-6 flex-1 flex flex-col"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>
                <div className="space-y-2 flex-1">
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do want to say"
                    className="h-full min-h-[150px] resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  {loading ? "sending" : "Send Message"}
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
