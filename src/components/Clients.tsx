import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp Inc.",
      content: "TechFlow delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and commitment to quality is unmatched.",
      rating: 5,
      company: "TechCorp Inc.",
    },
    {
      name: "Michael Chen",
      position: "Founder, StartupXYZ",
      content: "Working with TechFlow was a game-changer for our startup. They built our entire platform from scratch and helped us scale rapidly.",
      rating: 5,
      company: "StartupXYZ",
    },
    {
      name: "Emma Rodriguez",
      position: "VP Engineering, DataFlow",
      content: "The team's expertise in cloud solutions helped us migrate our infrastructure seamlessly. Outstanding technical knowledge and support.",
      rating: 5,
      company: "DataFlow",
    },
    {
      name: "David Thompson",
      position: "Director, FinanceHub",
      content: "TechFlow's cybersecurity solutions gave us peace of mind. Their comprehensive approach to security is exactly what we needed.",
      rating: 5,
      company: "FinanceHub",
    },
    {
      name: "Lisa Wang",
      position: "Product Manager, EcoTech",
      content: "The AI/ML solutions they developed for us transformed our business processes. Highly recommended for any tech-forward company.",
      rating: 5,
      company: "EcoTech",
    },
    {
      name: "James Miller",
      position: "CEO, RetailPro",
      content: "From concept to deployment, TechFlow handled everything professionally. Our e-commerce platform is now performing beyond expectations.",
      rating: 5,
      company: "RetailPro",
    },
  ];

  const clientLogos = [
    "TechCorp", "StartupXYZ", "DataFlow", "FinanceHub", "EcoTech", "RetailPro",
    "InnovateCorp", "CloudFirst", "NextGen", "FutureWorks", "DigitalEdge", "SmartSys"
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our innovative solutions.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="text-center p-4 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-accent opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm font-medium text-accent">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">200+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">150+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;