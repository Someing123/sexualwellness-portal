
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommunitySection from '@/components/CommunitySection';
import { MessageCircle, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Community = () => {
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
                Community & Support
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                Join Our Community
              </h1>
              <p className="text-lg text-foreground/70">
                Connect with peers, healthcare professionals, and counselors in a supportive 
                environment focused on sexual health and wellness.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        <CommunitySection />
        
        {/* Support groups */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-medium mb-4">Support Groups</h2>
              <p className="text-foreground/70">
                Join our specialized support groups to connect with others who share similar experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "HIV Support Network",
                  description: "A supportive community for individuals living with HIV to share experiences and resources.",
                  schedule: "Every Thursday at 6:00 PM",
                  format: "In-person & Virtual",
                  facilitator: "Dr. Marcus Johnson"
                },
                {
                  title: "Sexual Health & Wellness",
                  description: "General discussion group focused on promoting sexual health knowledge and practices.",
                  schedule: "Every Monday at 7:00 PM",
                  format: "In-person",
                  facilitator: "Lisa Chen, LMHC"
                },
                {
                  title: "LGBTQ+ Sexual Health",
                  description: "Addressing the specific sexual health concerns and needs of the LGBTQ+ community.",
                  schedule: "Every Wednesday at 6:30 PM",
                  format: "In-person & Virtual",
                  facilitator: "Alex Rivera, PhD"
                },
                {
                  title: "Young Adults Discussion",
                  description: "A safe space for young adults (18-25) to discuss sexual health topics and concerns.",
                  schedule: "Every Tuesday at 5:30 PM",
                  format: "Virtual",
                  facilitator: "Jasmine Taylor, MSW"
                },
                {
                  title: "Women's Sexual Health Circle",
                  description: "Support group focused on women's sexual health, wellness, and empowerment.",
                  schedule: "Every Saturday at 10:00 AM",
                  format: "In-person",
                  facilitator: "Dr. Sarah Wong"
                },
                {
                  title: "Partners Support Group",
                  description: "For partners of individuals with HIV or other STIs to find community and resources.",
                  schedule: "Every other Friday at 6:00 PM",
                  format: "In-person & Virtual",
                  facilitator: "Michael Patel, LCSW"
                },
              ].map((group, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-border card-hover"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="p-2.5 bg-primary/10 rounded-xl w-fit">
                        <MessageCircle size={20} className="text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-2">{group.title}</h3>
                    
                    <p className="text-foreground/70 text-sm mb-6 flex-grow">{group.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="text-primary" />
                        <span>{group.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-primary" />
                        <span>{group.format}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users size={16} className="text-primary" />
                        <span>Facilitator: {group.facilitator}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full">
                      Join Group
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Community guidelines */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                  Our Values
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Community Guidelines</h2>
                <p className="text-foreground/70 mb-6">
                  We're committed to creating a safe, supportive, and respectful environment for all members
                  of our community. These guidelines help ensure everyone feels welcome and valued.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Respect & Dignity",
                      description: "Treat all community members with respect, regardless of their background, identity, or health status."
                    },
                    {
                      title: "Confidentiality",
                      description: "Respect the privacy of others. What's shared in our community stays in our community."
                    },
                    {
                      title: "Supportive Communication",
                      description: "Offer support, not judgment. Use inclusive language and listen actively."
                    },
                    {
                      title: "Evidence-Based Information",
                      description: "Share accurate, factual information from reliable sources about sexual health."
                    },
                  ].map((guideline, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-border">
                      <h3 className="font-medium mb-1">{guideline.title}</h3>
                      <p className="text-sm text-foreground/70">{guideline.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-effect rounded-3xl overflow-hidden shadow-soft">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Community meeting" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
