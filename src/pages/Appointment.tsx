
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentForm from '@/components/AppointmentForm';
import { Calendar, Clock, ShieldCheck, HeartPulse } from 'lucide-react';

const Appointment = () => {
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
                Book an Appointment
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                Schedule Your Visit
              </h1>
              <p className="text-lg text-foreground/70">
                Make an appointment with our healthcare professionals for consultations,
                testing, or any sexual health services.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        <section className="py-12">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <AppointmentForm />
              </div>
              
              <div className="space-y-6">
                {/* What to expect */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <Clock className="mr-2 text-primary" size={20} />
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <div>
                        <p className="font-medium">Book Your Appointment</p>
                        <p className="text-sm text-foreground/70">Choose your preferred date and time</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <div>
                        <p className="font-medium">Confirmation</p>
                        <p className="text-sm text-foreground/70">Receive email confirmation with details</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <div>
                        <p className="font-medium">Visit Our Clinic</p>
                        <p className="text-sm text-foreground/70">Arrive 15 minutes before your appointment</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      <div>
                        <p className="font-medium">Consultation</p>
                        <p className="text-sm text-foreground/70">Meet with healthcare professionals</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Services */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <HeartPulse className="mr-2 text-primary" size={20} />
                    Our Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 mr-3 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <span>General Sexual Health Consultations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 mr-3 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <span>HIV/STI Testing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 mr-3 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <span>PrEP and PEP Consultations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 mr-3 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <span>Sexual Health Counseling</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 mr-3 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <span>Relationship Counseling</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 mr-3 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <span>Educational Sessions</span>
                    </li>
                  </ul>
                </div>
                
                {/* Privacy note */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <ShieldCheck className="mr-2 text-primary" size={20} />
                    Privacy & Confidentiality
                  </h3>
                  <p className="text-sm text-foreground/70">
                    We prioritize your privacy. All appointments, consultations, and test results 
                    are completely confidential. Our staff is trained to provide judgment-free care 
                    in a safe environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Appointment;
