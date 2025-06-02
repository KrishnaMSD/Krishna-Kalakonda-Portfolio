
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Krishna Kalakonda
          </Link>
          
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className={location.pathname === item.path ? 
                    "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" : 
                    "text-gray-700 hover:text-blue-600"
                  }
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
