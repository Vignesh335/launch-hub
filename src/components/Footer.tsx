import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TechFlow
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Transforming businesses through innovative software solutions. 
                We build the future, one line of code at a time.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('clients')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    Clients
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Cloud Solutions</li>
                <li>AI/ML Development</li>
                <li>Cybersecurity</li>
                <li>Consulting</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-primary-foreground/80 mb-4">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
              <div className="space-y-3">
                <Input 
                  placeholder="Your email address" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" className="w-full text-primary">
                  Subscribe
                </Button>
              </div>
            </div>

          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © 2024 TechFlow. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;