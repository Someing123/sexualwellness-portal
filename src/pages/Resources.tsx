
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InfoHub from '@/components/InfoHub';
import { ArrowRight } from 'lucide-react';

const Resources = () => {
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
                Educational Resources
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                Sexual Health Resources
              </h1>
              <p className="text-lg text-foreground/70">
                Access our comprehensive collection of evidence-based resources on sexual health,
                HIV prevention, STIs, and relationship wellness.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        <InfoHub />
        
        {/* Downloadable resources */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-medium mb-4">Downloadable Resources</h2>
              <p className="text-foreground/70">
                Access these PDF guides and materials for comprehensive information on sexual health topics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Complete Guide to HIV Prevention",
                  description: "A comprehensive resource covering all aspects of HIV prevention strategies.",
                  type: "PDF Guide",
                  size: "2.4 MB"
                },
                {
                  title: "Understanding STI Symptoms & Treatment",
                  description: "Visual guide to recognizing symptoms and understanding treatment options.",
                  type: "PDF Guide",
                  size: "3.1 MB"
                },
                {
                  title: "Sexual Health Conversation Starter",
                  description: "Tips for discussing sexual health with partners, healthcare providers, and others.",
                  type: "PDF Guide",
                  size: "1.8 MB"
                },
                {
                  title: "PrEP and PEP Information Sheet",
                  description: "Details about pre-exposure and post-exposure prophylaxis for HIV prevention.",
                  type: "PDF Guide",
                  size: "1.2 MB"
                },
                {
                  title: "Sexual Health Self-Assessment",
                  description: "Questionnaire to help identify potential concerns and next steps.",
                  type: "PDF Worksheet",
                  size: "0.9 MB"
                },
                {
                  title: "Community Resources Directory",
                  description: "List of local and national organizations providing sexual health services.",
                  type: "PDF Guide",
                  size: "1.5 MB"
                },
              ].map((resource, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-border card-hover"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-2">
                      <span className="text-xs font-medium px-2.5 py-1 bg-secondary rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
                    
                    <p className="text-foreground/70 text-sm mb-6 flex-grow">{resource.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-foreground/50">{resource.size}</span>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-primary font-medium text-sm group"
                      >
                        Download 
                        <ArrowRight 
                          size={16} 
                          className="ml-1 transform group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
