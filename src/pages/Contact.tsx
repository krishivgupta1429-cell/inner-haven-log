import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Mail, Phone, MapPin, Clock, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import AIChat from "@/components/dashboard/AIChat";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [type, setType] = useState<string>("");
  const chatRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Let’s talk</h1>
            <p className="mt-3 text-muted-foreground">We’re here to help. Reach out and we’ll get back within one business day. For urgent account issues, try our live chat below.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="space-y-4">
                      <p className="text-foreground font-medium">Thank you! Your message has been sent.</p>
                      <p className="text-muted-foreground">Our team will reply within 24 hours. In the meantime, you can start a live chat or return to the home page.</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button onClick={scrollToChat} variant="hero" className="inline-flex items-center">
                          <MessageCircle className="w-4 h-4 mr-2" /> Start live chat
                        </Button>
                        <a href="/" className="w-full sm:w-auto">
                          <Button variant="outline" className="w-full sm:w-auto">Back to home</Button>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                          <Input id="name" name="name" placeholder="Your full name" required aria-required="true" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" required aria-required="true" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Inquiry type <span className="text-destructive">*</span></Label>
                        <Select value={type} onValueChange={setType}>
                          <SelectTrigger aria-label="Inquiry type" className="w-full">
                            <SelectValue placeholder="Choose an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="media">Media</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="type" value={type} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                        <Textarea id="message" name="message" placeholder="How can we help?" rows={6} required aria-required="true" />
                      </div>
                      <p className="text-xs text-muted-foreground">By submitting, you agree that we may store and process your information to respond to your inquiry. We never sell your data.</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground"><span className="font-medium">Average response time:</span> within 24 hours</p>
                        <Button type="submit" variant="hero">Send message</Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Find us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
                    <iframe
                      title="Office location"
                      width="600"
                      height="450"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019055154245!2d-122.40136352343282!3d37.79361741034478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ea6b0b1d%3A0x7a5e6c1e5e1a2a4f!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000">
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a href="tel:+14155550123" className="text-muted-foreground hover:text-foreground transition-smooth">+1 (415) 555-0123</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href="mailto:hello@mindfulspace.app" className="text-muted-foreground hover:text-foreground transition-smooth">hello@mindfulspace.app</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-muted-foreground">100 Main Street, Suite 200, San Francisco, CA 94105</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Hours</p>
                        <p className="text-muted-foreground">Mon–Fri, 9:00am–6:00pm PT</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy & trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">We take your privacy seriously. Your information is encrypted in transit and at rest where applicable. We only use your details to respond to your inquiry and never sell your data.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect with us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-muted transition-smooth">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-muted transition-smooth">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div ref={chatRef} className="hidden lg:block">
                <AIChat />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-80">
            <img src="/placeholder.svg" alt="Client logo" className="h-8 w-auto grayscale" />
            <img src="/placeholder.svg" alt="Client logo" className="h-8 w-auto grayscale" />
            <img src="/placeholder.svg" alt="Client logo" className="h-8 w-auto grayscale" />
            <img src="/placeholder.svg" alt="Client logo" className="h-8 w-auto grayscale" />
          </div>

          <div className="mt-10 lg:hidden">
            <Card>
              <CardHeader>
                <CardTitle>Chat with us</CardTitle>
              </CardHeader>
              <CardContent>
                <AIChat />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-muted/20 border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2024 MindfulSpace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;


