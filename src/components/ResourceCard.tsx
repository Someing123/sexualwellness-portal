
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  className?: string;
  category?: string;
}

const ResourceCard = ({
  title,
  description,
  icon,
  linkTo,
  className,
  category,
}: ResourceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl p-6 shadow-sm border border-border card-hover",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="p-2.5 bg-primary/10 rounded-xl w-fit">
            {icon}
          </div>
        </div>
        
        {category && (
          <div className="mb-2">
            <span className="text-xs font-medium px-2.5 py-1 bg-secondary rounded-full">
              {category}
            </span>
          </div>
        )}
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        
        <p className="text-foreground/70 text-sm mb-6 flex-grow">{description}</p>
        
        <Link 
          to={linkTo} 
          className="inline-flex items-center text-primary font-medium text-sm group"
        >
          Learn more 
          <ArrowRight 
            size={16} 
            className="ml-1 transform group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
