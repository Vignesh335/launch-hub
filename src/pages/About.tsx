import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building2, Eye, Target, Heart, Code, Database, Cloud, Zap, Users, Globe, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About LogiByte
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Logic in every byte. A forward-thinking software development startup bridging the gap between vision and execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('services')}>
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">About LogiByte Private Limited</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                LogiByte Private Limited is a forward-thinking software development startup built to bridge 
                the gap between vision and execution. Founded on the belief that technology should be 
                purposeful, accessible, and scalable, LogiByte blends the precision of engineering with the 
                creativity of problem-solving to craft impactful digital solutions.
              </p>
              
              <p>
                At its core, LogiByte is a solo founder-led company — agile, efficient, and deeply involved. 
                Unlike traditional firms burdened by layers of management, we operate with focus, speed, 
                and complete ownership. Every solution is shaped through a hands-on approach, rooted in 
                deep client understanding, technical expertise, and an uncompromising commitment to quality.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Product Development</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Designing, building, and launching original software products that solve real-world 
                    problems with practical, user-centric solutions.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Client-Specific Solutions</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Delivering custom applications and digital tools tailored to the unique needs of 
                    businesses, entrepreneurs, and organizations across various sectors.
                  </p>
                </Card>
              </div>

              <p>
                What sets LogiByte apart is our lean and transparent model. All development, deployment, 
                and maintenance are personally managed by the founder. This ensures faster execution with 
                direct communication, lower costs and zero misalignment, and tight feedback loops with 
                consistent quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Vision, Mission & Values */}
      <section id="vision-mission" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vision, Mission & Core Values</h2>
            <p className="text-muted-foreground">Our guiding principles that shape everything we do</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Vision */}
            <Card className="p-8 text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">VISION</h3>
              <p className="text-muted-foreground">
                To be a trusted, technology-driven partner for businesses and innovators worldwide — 
                creating software that is not only functional but also meaningful: scalable, secure, 
                and grounded in logic.
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-8 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">MISSION</h3>
              <p className="text-muted-foreground">
                To simplify the journey from idea to software through logical, clear, and committed execution. 
                We develop high-quality products, offer custom-built solutions, and support the entire lifecycle.
              </p>
            </Card>

            {/* Values */}
            <Card className="p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">CORE VALUES</h3>
              <p className="text-muted-foreground">
                Clarity over complexity, logic first always, client-centric collaboration, and continuous learning. 
                Values that define how we think, build, and interact.
              </p>
            </Card>
          </div>

          {/* Core Values Details */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values in Detail</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Clarity Over Complexity", desc: "We believe good software is simple, well-structured, and understandable." },
                { title: "Logic First, Always", desc: "Every design decision and line of code must serve a logical purpose." },
                { title: "Client-Centric Collaboration", desc: "Clients are not customers — they're partners in our journey." },
                { title: "Scalability Through Simplicity", desc: "We design software that grows with your business." },
                { title: "Single Point of Responsibility", desc: "With a solo founder, accountability is clear and direct." },
                { title: "Efficiency Through Focus", desc: "We take on fewer projects to give more focus to each one." },
                { title: "Trust and Transparency", desc: "We're open about what's possible and how we're progressing." },
                { title: "Continuous Learning", desc: "Technology evolves — and so do we with new tools and methods." }
              ].map((value, index) => (
                <Card key={index} className="p-4">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Founder's Message */}
      <section id="founder" className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Founder's Message</h2>
              <p className="text-muted-foreground">From the Desk of the Founder</p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <blockquote className="text-lg italic mb-6 text-center">
                "Every great product begins with a clear idea — and is brought to life with code that has 
                purpose, structure, and logic."
              </blockquote>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  When I started LogiByte, I wasn't trying to build a big company — I was trying to solve real 
                  problems with technology, one client at a time. I envisioned a space where businesses, 
                  creators, and entrepreneurs could bring their ideas, and get back fully functional, reliable 
                  software without layers of miscommunication, inflated costs, or unnecessary complexity.
                </p>
                
                <p>
                  Today, LogiByte Private Limited is a reflection of that vision — lean, focused, and driven by 
                  craftsmanship. Every project we take on is handled directly by me. From the first discussion 
                  to the final deployment, I stay involved at every step to ensure that what we deliver truly 
                  aligns with what you need.
                </p>
              </div>

              <div className="mt-8 text-center">
                <h4 className="font-semibold text-primary">Vignesh Koyilada</h4>
                <p className="text-sm text-muted-foreground">Founder & Director, LogiByte Private Limited</p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    koyiladavignesh@gmail.com
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    +91 7569481955
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* What We Do */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer a spectrum of software development services meticulously designed to turn ideas 
              into real-world digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Product Development",
                desc: "SaaS products, MVPs, mobile-first design, and scalable deployment pipelines."
              },
              {
                icon: Users,
                title: "Custom Software",
                desc: "Tailored applications designed around your specific business processes."
              },
              {
                icon: Zap,
                title: "Client Applications",
                desc: "Focused mini-projects for specific use cases with rapid development."
              },
              {
                icon: Globe,
                title: "Maintenance & Deployment",
                desc: "Complete deployment, monitoring, and ongoing maintenance services."
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Technology Stack */}
      <section id="tech-stack" className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
            <p className="text-muted-foreground">
              Modern technologies chosen for speed, scalability, and future-proof solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React.js, Next.js</li>
                <li>• Vue.js</li>
                <li>• Tailwind CSS, Bootstrap</li>
                <li>• TypeScript/JavaScript</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Backend & Database</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Node.js, Express.js</li>
                <li>• Django, Flask (Python)</li>
                <li>• PostgreSQL, MySQL</li>
                <li>• MongoDB, Firebase</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Docker, CI/CD</li>
                <li>• AWS, DigitalOcean</li>
                <li>• Vercel, Netlify</li>
                <li>• NGINX, Apache</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-primary-foreground/80">
              Ready to bring your ideas to life? Let's start the conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-primary-foreground text-primary">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm">contact@logibyte.in</p>
            </Card>

            <Card className="p-6 text-center bg-primary-foreground text-primary">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm">+91 7569481955</p>
            </Card>

            <Card className="p-6 text-center bg-primary-foreground text-primary">
              <Globe className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="text-sm">www.logibyte.in</p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="secondary" size="lg" onClick={() => window.location.href = 'mailto:contact@logibyte.in'}>
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;