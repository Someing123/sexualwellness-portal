
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Users, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate content loading with a slight delay for animation effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-16">
      {/* Background gradient & pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-teal-50 bg-mesh-pattern opacity-70 -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div 
                className={cn(
                  "inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium opacity-0",
                  isLoaded && "animate-fadeIn"
                )}
              >
                Your health matters. We're here to help.
              </div>
              
              <h1 
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight opacity-0",
                  isLoaded && "animate-slideUp"
                )}
              >
                Sexual Health
                <span className="block text-primary">Resources & Support</span>
              </h1>
              
              <p 
                className={cn(
                  "text-lg md:text-xl text-foreground/80 max-w-lg mt-4 opacity-0",
                  isLoaded && "animate-slideUp stagger-1"
                )}
              >
                Access comprehensive care, education, and support in a safe, 
                judgment-free environment designed for your wellbeing.
              </p>
            </div>
            
            <div 
              className={cn(
                "flex flex-col sm:flex-row gap-4 opacity-0",
                isLoaded && "animate-slideUp stagger-2"
              )}
            >
              <Button asChild size="lg" className="btn-pulse">
                <Link to="/appointment" className="flex items-center gap-2">
                  Book Appointment <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
            
            {/* Feature highlights */}
            <div 
              className={cn(
                "grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 opacity-0",
                isLoaded && "animate-slideUp stagger-3"
              )}
            >
              <FeatureItem 
                icon={<Calendar className="text-teal-600" />}
                title="Easy Booking"
                description="Schedule appointments with healthcare providers"
              />
              
              <FeatureItem 
                icon={<ShieldCheck className="text-teal-600" />}
                title="Private & Secure"
                description="Confidential consultations and information"
              />
              
              <FeatureItem 
                icon={<Users className="text-teal-600" />}
                title="Community Support"
                description="Connect with counselors and peers"
              />
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div 
            className={cn(
              "relative hidden lg:block opacity-0",
              isLoaded && "animate-slideRight stagger-1"
            )}
          >
            <div className="relative">
              {/* Main image container with glass effect */}
              <div className="glass-effect rounded-3xl overflow-hidden shadow-soft">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80" 
                  alt="Healthcare professionals in consultation" 
                  className="w-full h-[600px] object-cover opacity-90"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute top-10 -right-8 w-28 h-28 bg-teal-400/30 rounded-full blur-2xl"></div>
              
              {/* Floating card */}
              <div className="absolute bottom-10 -left-12 glass-effect rounded-2xl p-6 w-56 shadow-soft">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-foreground/70">Expert Care</span>
                  <span className="font-medium">Professional and empathetic healthcare providers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="p-2 rounded-full bg-primary/10 mb-3">
        {icon}
      </div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
};

export default Hero;
