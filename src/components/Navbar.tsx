
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, Calendar, Users, Info, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
      isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart size={24} className="text-primary" />
          <span className="text-xl font-display font-medium">HealthConnect</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/resources" label="Resources" />
          <NavLink to="/appointment" label="Appointments" icon={<Calendar size={16} />} />
          <NavLink to="/community" label="Community" icon={<Users size={16} />} />
          <NavLink to="/about" label="About Us" />
          
          <div className="pl-2">
            <Button asChild size="sm" className="btn-pulse">
              <Link to="/appointment">Get Help Now</Link>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-foreground" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-background pt-20 px-6 z-40 transition-all duration-300 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <MobileNavLink to="/" label="Home" onClick={toggleMobileMenu} />
          <MobileNavLink to="/resources" label="Resources" onClick={toggleMobileMenu} />
          <MobileNavLink to="/appointment" label="Book Appointment" onClick={toggleMobileMenu} icon={<Calendar size={20} />} />
          <MobileNavLink to="/community" label="Community Support" onClick={toggleMobileMenu} icon={<Users size={20} />} />
          <MobileNavLink to="/about" label="About Us" onClick={toggleMobileMenu} icon={<Info size={20} />} />
          
          <Button asChild className="mt-4 w-full btn-pulse">
            <Link to="/appointment" onClick={toggleMobileMenu}>Get Help Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

const NavLink = ({ to, label, icon }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="relative px-3 py-2 text-foreground/80 hover:text-foreground transition-colors group"
    >
      <span className="flex items-center space-x-1">
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, label, icon, onClick }: MobileNavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-3 text-foreground/80 hover:text-foreground py-2 border-b border-border"
      onClick={onClick}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span className="text-lg">{label}</span>
    </Link>
  );
};

export default Navbar;
