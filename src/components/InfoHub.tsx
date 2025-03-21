
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Info, 
  Search, 
  HeartPulse, 
  Pill, 
  Activity,
  Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResourceCard from './ResourceCard';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Resources' },
  { id: 'hiv', label: 'HIV Prevention' },
  { id: 'sti', label: 'STI Information' },
  { id: 'education', label: 'Sexual Education' },
  { id: 'relationships', label: 'Healthy Relationships' },
];

const resources = [
  {
    id: 1,
    title: 'HIV Prevention & PrEP',
    description: 'Learn about HIV prevention strategies, including PrEP medication and how it can protect you.',
    icon: <ShieldCheck size={20} className="text-primary" />,
    linkTo: '/resources',
    category: 'hiv',
  },
  {
    id: 2,
    title: 'Understanding STI Testing',
    description: 'Everything you need to know about STI testing procedures, frequency recommendations, and results.',
    icon: <Search size={20} className="text-primary" />,
    linkTo: '/resources',
    category: 'sti',
  },
  {
    id: 3,
    title: 'Sexual Health Basics',
    description: 'Essential information about sexual health, anatomy, and maintaining wellness.',
    icon: <HeartPulse size={20} className="text-primary" />,
    linkTo: '/resources',
    category: 'education',
  },
  {
    id: 4,
    title: 'Contraception Options',
    description: 'Explore different contraception methods, their effectiveness, and how to use them correctly.',
    icon: <Pill size={20} className="text-primary" />,
    linkTo: '/resources',
    category: 'education',
  },
  {
    id: 5,
    title: 'Understanding Consent',
    description: 'Learn about the importance of consent in sexual relationships and how to communicate effectively.',
    icon: <Info size={20} className="text-primary" />,
    linkTo: '/resources',
    category: 'relationships',
  },
  {
    id: 6,
    title: 'HIV/AIDS Treatment',
    description: 'Information about current HIV treatments, management strategies, and living well with HIV.',
    icon: <Activity size={20} className="text-primary" />,
    linkTo: '/resources',
    category: 'hiv',
  },
  {
    id: 7,
    title: 'LGBTQ+ Sexual Health',
    description: 'Resources specifically addressing the sexual health needs and concerns of LGBTQ+ individuals.',
    icon: <Users size={20} className="text-primary" />,
    linkTo: '/resources',
    category: 'education',
  },
  {
    id: 8,
    title: 'Partner Communication',
    description: 'Tips for discussing sexual health, boundaries, and preferences with your partner(s).',
    icon: <Users size={20} className="text-primary" />,
    linkTo: '/resources',
    category: 'relationships',
  },
];

const InfoHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredResources = activeCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === activeCategory);
  
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
            Educational Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Sexual Health Information Hub</h2>
          <p className="text-foreground/70 leading-relaxed">
            Access reliable, evidence-based information about sexual health, HIV prevention, 
            and wellness to make informed decisions about your health.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-secondary hover:bg-secondary/80 text-foreground/70"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Resource grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.map(resource => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
              linkTo={resource.linkTo}
              category={
                resource.category === 'hiv' ? 'HIV' :
                resource.category === 'sti' ? 'STI' :
                resource.category === 'education' ? 'Education' :
                resource.category === 'relationships' ? 'Relationships' : ''
              }
            />
          ))}
        </div>
        
        {/* View more button */}
        <div className="mt-12 text-center">
          <Button asChild className="btn-pulse">
            <Link to="/resources" className="flex items-center gap-1">
              Explore All Resources <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoHub;
