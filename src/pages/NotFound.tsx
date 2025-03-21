
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-24">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <AlertCircle size={40} className="text-primary" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-semibold">404</h1>
            <h2 className="text-2xl md:text-3xl font-medium">Page Not Found</h2>
            
            <p className="text-foreground/70 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            
            <div className="pt-4">
              <Button asChild className="btn-pulse">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft size={16} /> Return to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
