
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, ShieldCheck, Users, HeartPulse, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Page header */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                Our Mission & Vision
              </h1>
              <p className="text-lg text-foreground/70">
                Learn about our organization's commitment to providing comprehensive, 
                accessible sexual health resources and support for all.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                  Why We're Here
                </h2>
                <p className="text-foreground/70 mb-6">
                  HealthConnect was founded with a simple yet powerful mission: to make sexual health 
                  information and services accessible to everyone in a safe, supportive, and judgment-free 
                  environment.
                </p>
                <p className="text-foreground/70 mb-6">
                  We believe that knowledge is power, especially when it comes to sexual health. By 
                  providing evidence-based information, compassionate support, and quality healthcare 
                  services, we aim to empower individuals to make informed decisions about their sexual 
                  health and wellbeing.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      icon: <ShieldCheck size={20} className="text-primary" />,
                      title: "Education & Prevention",
                      description: "Providing accurate information to prevent HIV and STIs"
                    },
                    {
                      icon: <HeartPulse size={20} className="text-primary" />,
                      title: "Care & Support",
                      description: "Offering comprehensive healthcare and emotional support"
                    },
                    {
                      icon: <Users size={20} className="text-primary" />,
                      title: "Community Building",
                      description: "Creating supportive networks for connection and sharing"
                    },
                    {
                      icon: <Award size={20} className="text-primary" />,
                      title: "Advocacy & Awareness",
                      description: "Promoting sexual health as an essential part of overall wellbeing"
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-secondary/50 rounded-lg">
                      <div className="p-2 bg-white rounded-full flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{item.title}</h3>
                        <p className="text-xs text-foreground/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-effect rounded-3xl overflow-hidden shadow-soft">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  alt="Healthcare professionals in discussion" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                Meet Our Experts
              </h2>
              <p className="text-foreground/70">
                Our diverse team of healthcare professionals, counselors, and educators are dedicated to 
                providing the highest quality care and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Sarah Chen",
                  role: "Medical Director",
                  bio: "Board-certified physician with over 15 years of experience in sexual health and HIV care.",
                  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Lead Counselor",
                  bio: "Licensed therapist specializing in sexual health counseling and HIV support.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                },
                {
                  name: "Dr. Jamie Taylor",
                  role: "Education Coordinator",
                  bio: "PhD in Public Health with expertise in sexual health education and community outreach.",
                  image: "https://images.unsplash.com/photo-1573497620359-c417e9597191?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                },
                {
                  name: "Aisha Johnson",
                  role: "Community Advocate",
                  bio: "LGBTQ+ advocate with a passion for ensuring accessible healthcare for all communities.",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80"
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border card-hover">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-foreground/70 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values section */}
        <section className="py-16 bg-blue-50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                What We Stand For
              </h2>
              <p className="text-foreground/70">
                Our core values guide every aspect of our work and shape the experience
                of everyone who interacts with our organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Heart size={40} className="text-primary" />,
                  title: "Compassion",
                  description: "We approach every interaction with empathy, understanding, and genuine care for the wellbeing of those we serve."
                },
                {
                  icon: <ShieldCheck size={40} className="text-primary" />,
                  title: "Integrity",
                  description: "We uphold the highest ethical standards in all our services, communications, and relationships."
                },
                {
                  icon: <Users size={40} className="text-primary" />,
                  title: "Inclusivity",
                  description: "We celebrate diversity and are committed to creating a welcoming environment for people of all backgrounds and identities."
                },
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-medium mb-4">
              Join Us in Our Mission
            </h2>
            <p className="text-foreground/70 mb-8">
              Whether you're seeking information, support, or want to contribute to our work,
              we invite you to be part of our community dedicated to sexual health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-pulse">
                <Link to="/appointment" className="flex items-center gap-2">
                  Book an Appointment <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/community">Join Our Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
