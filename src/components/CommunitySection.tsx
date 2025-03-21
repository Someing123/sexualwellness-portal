
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CommunityEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  attendees: number;
}

const upcomingEvents: CommunityEvent[] = [
  {
    id: 1,
    title: "Sexual Health Awareness Workshop",
    date: "May 15, 2023",
    time: "2:00 PM - 4:00 PM",
    type: "Workshop",
    attendees: 24
  },
  {
    id: 2,
    title: "HIV Prevention and Education",
    date: "May 22, 2023",
    time: "6:00 PM - 7:30 PM",
    type: "Seminar",
    attendees: 18
  },
  {
    id: 3,
    title: "LGBTQ+ Support Group",
    date: "May 25, 2023",
    time: "5:00 PM - 6:30 PM",
    type: "Support Group",
    attendees: 12
  }
];

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
            Community & Support
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Connect with Others</h2>
          <p className="text-foreground/70 leading-relaxed">
            Join our community events, support groups, and connect with healthcare professionals 
            in a safe and supportive environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community counselors */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border card-hover col-span-1">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <div className="p-2.5 bg-teal-100 text-teal-700 rounded-xl w-fit">
                  <Users size={20} />
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2">Community Counselors</h3>
              
              <p className="text-foreground/70 text-sm mb-6 flex-grow">
                Our trained counselors offer support, guidance, and education on sexual health 
                topics. Connect with someone who understands your concerns.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { name: "Dr. Sarah Chen", role: "Sexual Health Specialist" },
                  { name: "Michael Rodriguez", role: "HIV Counselor" },
                  { name: "Dr. Jamie Taylor", role: "Relationship Therapist" },
                  { name: "Aisha Johnson", role: "LGBTQ+ Advocate" }
                ].map((person, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-medium truncate">{person.name}</p>
                      <p className="text-xs text-foreground/70 truncate">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link to="/community">View All Counselors</Link>
              </Button>
            </div>
          </div>
          
          {/* Support groups */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border card-hover col-span-1">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl w-fit">
                  <MessageCircle size={20} />
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2">Support Groups</h3>
              
              <p className="text-foreground/70 text-sm mb-6 flex-grow">
                Join peers in a safe space to discuss experiences, share information, and 
                find emotional support for sexual health concerns.
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  { title: "HIV Support Network", members: 134, meetings: "Weekly" },
                  { title: "Sexual Health & Wellness", members: 89, meetings: "Bi-weekly" },
                  { title: "LGBTQ+ Sexual Health", members: 156, meetings: "Weekly" },
                  { title: "Young Adults Discussion", members: 112, meetings: "Monthly" }
                ].map((group, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                  >
                    <div>
                      <p className="text-sm font-medium">{group.title}</p>
                      <p className="text-xs text-foreground/70">{group.members} members</p>
                    </div>
                    <div className="text-xs bg-white px-2 py-1 rounded-full text-foreground/70">
                      {group.meetings}
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link to="/community">Join a Group</Link>
              </Button>
            </div>
          </div>
          
          {/* Upcoming events */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border card-hover col-span-1">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <div className="p-2.5 bg-teal-100 text-teal-700 rounded-xl w-fit">
                  <Calendar size={20} />
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2">Upcoming Events</h3>
              
              <p className="text-foreground/70 text-sm mb-6 flex-grow">
                Attend workshops, seminars, and community events focused on sexual 
                health education and awareness.
              </p>
              
              <div className="space-y-4 mb-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={cn(
                            "text-xs px-2 py-0.5 rounded-full",
                            event.type === "Workshop" ? "bg-blue-100 text-blue-700" :
                            event.type === "Seminar" ? "bg-purple-100 text-purple-700" :
                            "bg-teal-100 text-teal-700"
                          )}>
                            {event.type}
                          </span>
                          <span className="text-xs text-foreground/70">{event.attendees} attending</span>
                        </div>
                      </div>
                      <div className="text-right text-xs text-foreground/70">
                        <div>{event.date}</div>
                        <div>{event.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link to="/community">View All Events</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="btn-pulse">
            <Link to="/community" className="flex items-center gap-1">
              Explore Our Community <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
