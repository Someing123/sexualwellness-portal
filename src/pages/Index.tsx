
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import InfoHub from '@/components/InfoHub';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, Stethoscope, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Services section */}
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Comprehensive Sexual Health Services</h2>
              <p className="text-foreground/70 leading-relaxed">
                We offer a range of services designed to support your sexual health and wellbeing,
                from prevention and education to testing and treatment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1 */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm card-hover">
                <div className="p-3 bg-blue-50 rounded-xl w-fit mb-5">
                  <ShieldCheck size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">HIV Prevention</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Access PrEP, PEP, counseling, testing, and education to prevent HIV transmission.
                </p>
                <Link 
                  to="/resources" 
                  className="text-primary font-medium text-sm inline-flex items-center group"
                >
                  Learn more
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm card-hover">
                <div className="p-3 bg-teal-50 rounded-xl w-fit mb-5">
                  <Stethoscope size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">STI Testing & Treatment</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Confidential testing for STIs, result consultations, and treatment options.
                </p>
                <Link 
                  to="/resources" 
                  className="text-primary font-medium text-sm inline-flex items-center group"
                >
                  Learn more
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm card-hover">
                <div className="p-3 bg-blue-50 rounded-xl w-fit mb-5">
                  <Calendar size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Consultations</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Private consultations with healthcare professionals about any sexual health concerns.
                </p>
                <Link 
                  to="/appointment" 
                  className="text-primary font-medium text-sm inline-flex items-center group"
                >
                  Learn more
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Service 4 */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm card-hover">
                <div className="p-3 bg-teal-50 rounded-xl w-fit mb-5">
                  <HeartPulse size={24} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Sexual Education</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Evidence-based education on sexual health, relationships, and wellness.
                </p>
                <Link 
                  to="/resources" 
                  className="text-primary font-medium text-sm inline-flex items-center group"
                >
                  Learn more
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild className="btn-pulse">
                <Link to="/appointment" className="flex items-center gap-1">
                  Book an Appointment <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh-pattern opacity-70"></div>
          
          <div className="container max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-border">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-display font-medium mb-3">
                    Not sure where to start?
                  </h2>
                  <p className="text-foreground/70">
                    Our healthcare professionals are ready to guide you. Book a confidential 
                    consultation to discuss your concerns and questions.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <Button asChild size="lg" className="btn-pulse">
                    <Link to="/appointment">Get Started Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <InfoHub />
        <CommunitySection />
        
        {/* Testimonials section */}
        <section className="py-20 bg-blue-50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">What People Say</h2>
              <p className="text-foreground/70 leading-relaxed">
                Read about the experiences of people who have benefited from our services
                and resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "The HIV prevention resources and counseling I received were life-changing. The staff was knowledgeable, supportive, and never judgmental.",
                  author: "Michael K.",
                  role: "Client",
                },
                {
                  quote: "I was nervous about getting tested, but the team made me feel comfortable and secure. The process was smooth, private, and educational.",
                  author: "Sarah T.",
                  role: "Client",
                },
                {
                  quote: "The community support groups helped me connect with others facing similar challenges. It's been an invaluable part of my health journey.",
                  author: "Jamie L.",
                  role: "Support Group Member",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-border relative">
                  <div className="absolute top-6 left-6 text-6xl text-primary/10 font-serif">"</div>
                  <div className="relative z-10">
                    <p className="text-foreground/80 italic mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="font-medium text-blue-600">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.author}</h4>
                        <p className="text-sm text-foreground/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA section */}
        <section className="py-24 bg-gradient-to-b from-white to-teal-50">
          <div className="container max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Take Control of Your Sexual Health Today
            </h2>
            <p className="text-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're seeking information, support, or healthcare services,
              we're here to help you make informed decisions about your sexual health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-pulse">
                <Link to="/appointment" className="flex items-center gap-2">
                  Book Appointment <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
