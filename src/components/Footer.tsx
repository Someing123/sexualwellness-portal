
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-6">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Heart size={24} className="text-primary" />
              <span className="text-xl font-display font-medium">HealthConnect</span>
            </Link>
            
            <p className="text-neutral-400 text-sm">
              Providing comprehensive sexual health resources, education, and support in a safe,
              judgment-free environment.
            </p>
            
            <div className="pt-4 flex space-x-3">
              {["facebook", "twitter", "instagram", "youtube"].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center transition-colors hover:bg-primary/20 hover:text-primary"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="sr-only">{social}</span>
                  <i className={`lucide-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Resources", path: "/resources" },
                { name: "Book Appointment", path: "/appointment" },
                { name: "Community", path: "/community" },
                { name: "Privacy Policy", path: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-neutral-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight 
                      size={14} 
                      className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" 
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-neutral-400">
                <MapPin size={18} className="mt-0.5 text-primary" />
                <span>123 Health Street, Medical District<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-400">
                <Phone size={18} className="text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-400">
                <Mail size={18} className="text-primary" />
                <span>contact@healthconnect.org</span>
              </li>
            </ul>
            
            <div className="pt-2">
              <h5 className="font-medium mb-2">Hours of Operation</h5>
              <p className="text-neutral-400 text-sm">
                Monday - Friday: 9:00 AM - 5:00 PM<br/>
                Saturday: 10:00 AM - 2:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Stay Updated</h4>
            <p className="text-neutral-400 text-sm">
              Subscribe to our newsletter for the latest resources, events, and health information.
            </p>
            
            <form className="mt-4">
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
                <Button type="submit" className="w-full btn-pulse">
                  Subscribe
                </Button>
              </div>
            </form>
            
            <p className="text-neutral-500 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our organization.
            </p>
          </div>
        </div>
        
        <div className="mt-14 pt-6 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>© {currentYear} HealthConnect. All rights reserved.</p>
          <p className="mt-1">
            <span>Providing accessible sexual health resources and support for all</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
