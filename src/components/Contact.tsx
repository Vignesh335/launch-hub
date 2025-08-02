import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@techflow.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Office",
      detail: "123 Tech Street, Silicon Valley, CA 94025",
      description: "Come visit our office"
    },
    {
      icon: Clock,
      title: "Response Time",
      detail: "Within 24 hours",
      description: "We respond quickly to all inquiries"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Start Your Project</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team for a free consultation and project estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.detail}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
                <p className="mb-4 opacity-90">
                  Schedule a free 30-minute consultation to discuss your project requirements and get expert advice.
                </p>
                <Button variant="secondary" className="w-full text-primary">
                  Book a Call
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Project Request Form</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll provide you with a detailed proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-app">Web Application</SelectItem>
                          <SelectItem value="mobile-app">Mobile Application</SelectItem>
                          <SelectItem value="cloud-solution">Cloud Solution</SelectItem>
                          <SelectItem value="ai-ml">AI/ML Solution</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-25k">Under $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="over-250k">Over $250,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      placeholder="Please describe your project requirements, goals, and any specific features you need..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Project Request"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;