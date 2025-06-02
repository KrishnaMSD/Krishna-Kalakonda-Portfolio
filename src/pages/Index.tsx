
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SkillsVisualization from '@/components/SkillsVisualization';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import HireModal from '@/components/HireModal';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const downloadResume = () => {
    console.log('Downloading Resume...');
    // In a real implementation, this would trigger a download
    alert('Resume download started!');
  };

  const downloadCV = () => {
    console.log('Downloading CV...');
    // In a real implementation, this would trigger a download
    alert('CV download started!');
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krishna-kalakonda/', color: 'bg-blue-600' },
    { name: 'GitHub', url: 'https://github.com/krishna-kalakonda', color: 'bg-gray-800' },
    { name: 'Instagram', url: 'https://instagram.com/krishna-kalakonda', color: 'bg-pink-600' }
  ];

  const workshops = [
    { name: 'Drone Technology Workshop', year: '2017', skills: 'Drone Assembly, Piloting' },
    { name: '3D Printing Workshop', year: '2017', skills: 'CAD Design, 3D Printing' },
    { name: 'Astrophysics Camp', year: '2018', skills: 'Space Science, Rocket Mechanics' }
  ];

  const activities = [
    { role: 'Event Coordinator', period: 'June 2017 – May 2022', description: 'Led university event planning and execution' },
    { role: 'Sports Captain', period: 'July 2012 – May 2021', description: 'Led multiple sports teams in various competitions' },
    { role: 'NSS Volunteer', period: 'August 2017 – May 2022', description: 'Community outreach and social service' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Krishna Kalakonda
            </h1>
            <p className="text-2xl text-gray-600 mb-6">Full-Stack Data Scientist & AI Engineer</p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Passionate data scientist with 2+ years of experience in developing AI-driven tools and applications. 
              Currently pursuing MS in Data Science at DePaul University with a perfect 4.0 GPA. 
              Specialized in machine learning, NLP, and full-stack development.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <Button key={link.name} asChild className={`${link.color} hover:opacity-90`}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-100 to-blue-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">2+ Years</h3>
                <p className="text-blue-600">Professional Experience</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-100 to-purple-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-purple-800 mb-2">15+ Projects</h3>
                <p className="text-purple-600">AI & Data Science Projects</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-gradient-to-r from-green-100 to-green-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-2">95% Accuracy</h3>
                <p className="text-green-600">Best Model Performance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SkillsVisualization />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <WorkExperience />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Education />
        </div>
      </section>

      {/* Workshops & Activities */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Workshops */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center">
                Workshops & Hackathons
              </h2>
              <div className="space-y-4">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="shadow-lg border-0 bg-gradient-to-r from-orange-50 to-red-50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-orange-800">{workshop.name}</h3>
                      <p className="text-sm text-gray-600">{workshop.year}</p>
                      <p className="text-red-700 text-sm mt-1">{workshop.skills}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent text-center">
                Extracurricular Activities
              </h2>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <Card key={index} className="shadow-lg border-0 bg-gradient-to-r from-teal-50 to-cyan-50">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-teal-800">{activity.role}</h3>
                      <p className="text-sm text-gray-600">{activity.period}</p>
                      <p className="text-cyan-700 text-sm mt-1">{activity.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 mb-8">Explore my latest data science and AI projects</p>
          <Link to="/projects">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
              View All Projects →
            </Button>
          </Link>
        </div>
      </section>

      {/* Download & Contact Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              onClick={downloadResume}
              variant="outline" 
              className="border-green-300 text-green-700 hover:bg-green-50"
            >
              Download Resume
            </Button>
            <Button 
              onClick={downloadCV}
              variant="outline" 
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              Download CV
            </Button>
          </div>

          <Button 
            onClick={() => setIsHireModalOpen(true)}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-3"
          >
            Hire Me
          </Button>
        </div>
      </section>

      <HireModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
