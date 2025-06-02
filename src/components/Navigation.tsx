
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HireModal } from "./HireModal";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
  ];

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to public folder
    link.download = 'Krishna_Kalakonda_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // You'll need to add this file to public folder
    link.download = 'Krishna_Kalakonda_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                  Downloads
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-md">
                <DropdownMenuItem 
                  onClick={handleDownloadResume}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  Download Resume
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleDownloadCV}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  Download CV
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <HireModal />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
