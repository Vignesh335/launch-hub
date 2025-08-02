import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Lightbulb, Settings, Rocket, HeadphonesIcon } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Consultation & Planning",
      description: "Strategic technology consulting to align your vision with the right solutions.",
      features: [
        "Technology Assessment",
        "Architecture Planning", 
        "Project Roadmapping",
        "Risk Analysis"
      ],
      timeline: "1-2 weeks"
    },
    {
      icon: Settings,
      title: "Custom Development",
      description: "End-to-end development services tailored to your specific business requirements.",
      features: [
        "Full-Stack Development",
        "API Integration",
        "Database Design",
        "Quality Assurance"
      ],
      timeline: "8-16 weeks"
    },
    {
      icon: Rocket,
      title: "Deployment & Launch",
      description: "Seamless deployment with comprehensive testing and performance optimization.",
      features: [
        "Cloud Deployment",
        "Performance Testing",
        "Security Auditing",
        "Go-Live Support"
      ],
      timeline: "2-3 weeks"
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Continuous maintenance, updates, and technical support for your applications.",
      features: [
        "24/7 Monitoring",
        "Regular Updates",
        "Bug Fixes",
        "Feature Enhancements"
      ],
      timeline: "Ongoing"
    },
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
    { step: "02", title: "Design", description: "Creating user-centered designs and prototypes" },
    { step: "03", title: "Development", description: "Building robust and scalable solutions" },
    { step: "04", title: "Testing", description: "Comprehensive quality assurance and testing" },
    { step: "05", title: "Deployment", description: "Launching your application with full support" },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing support, we provide comprehensive services to ensure your project's success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-accent font-medium mb-4">
                  Timeline: {service.timeline}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  )}
                </div>
                <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose Our Team?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Developers</h4>
                  <p className="text-muted-foreground">Our team consists of senior developers with 5+ years of experience in modern technologies.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Agile Methodology</h4>
                  <p className="text-muted-foreground">We follow agile development practices for faster delivery and better collaboration.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-muted-foreground">Comprehensive testing ensures your software is reliable, secure, and performs optimally.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Transparent Communication</h4>
                  <p className="text-muted-foreground">Regular updates, progress reports, and open communication throughout the project.</p>
                </div>
              </div>
            </div>
            <Button variant="cta" size="lg" className="mt-8">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="relative">
            <img 
              src={teamImage} 
              alt="Team Collaboration" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;