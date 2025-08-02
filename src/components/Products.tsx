import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Database, Cloud, Shield, Cpu } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

const Products = () => {
  const products = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications built with React, Vue, and cutting-edge frameworks.",
      features: ["Progressive Web Apps", "E-commerce Solutions", "Content Management Systems"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "Native iOS/Android"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      features: ["AWS/Azure/GCP", "Microservices", "DevOps Automation"],
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with custom analytics platforms.",
      features: ["Business Intelligence", "Real-time Dashboards", "Machine Learning"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and customer data.",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions"],
    },
    {
      icon: Cpu,
      title: "AI/ML Solutions",
      description: "Artificial intelligence and machine learning solutions to automate and optimize processes.",
      features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Products & Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive software solutions across multiple platforms and technologies to meet your business needs.
          </p>
        </div>

        {/* Hero product showcase */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src={productsImage} 
              alt="Product Showcase" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Enterprise Dashboard Suite</h3>
                <p className="text-lg opacity-90">Our flagship product helping businesses visualize and manage their operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="tech" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-primary rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss how we can bring your ideas to life with our expertise and cutting-edge technology.
          </p>
          <Button variant="secondary" size="lg" className="text-primary">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;