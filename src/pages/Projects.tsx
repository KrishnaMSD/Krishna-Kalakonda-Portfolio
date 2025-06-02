
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: "phone-verified",
    title: "Phone Verified Leads",
    period: "Oct 2023 – May 2024",
    skills: ["LLMs", "Chatbots", "TTS", "STT", "Communication APIs"],
    introduction: "An advanced AI-powered system designed to automate contact validation processes using cutting-edge technologies.",
    responsibilities: [
      "Implemented phone-verified leads system using AI tools",
      "Integrated communication APIs with LLMs and voice technologies",
      "Developed Caller Manager module for seamless provider switching",
      "Built application website using React with external tool integrations"
    ],
    outcomes: "Increased call outreach efficiency by 120% and seamlessly integrated multiple communication providers.",
    struggles: "Initially faced challenges with API rate limiting and voice recognition accuracy. Overcame these by implementing intelligent queuing systems and fine-tuning speech models.",
    link: "https://github.com/krishna-kalakonda"
  },
  {
    id: "conversation-intelligence",
    title: "Conversation Intelligence",
    period: "Aug 2022 – June 2023",
    skills: ["Speaker Recognition", "Transcription", "NER"],
    introduction: "A comprehensive sales call analysis tool that extracts valuable insights from audio conversations.",
    responsibilities: [
      "Built advanced tool for analyzing sales calls",
      "Implemented speaker recognition using speech embeddings",
      "Developed action item extraction using NERs and Regex",
      "Created performance measurement module for sales representatives"
    ],
    outcomes: "Achieved 100% accuracy in speaker recognition and 92% accuracy in action item identification.",
    struggles: "Handling overlapping speech and background noise was challenging. Solved using advanced audio preprocessing and ensemble models.",
    link: "https://github.com/krishna-kalakonda"
  },
  {
    id: "adhd-prediction",
    title: "ADHD and Gender Prediction",
    period: "Mar 2025 – Apr 2025",
    skills: ["Python", "Data Visualization", "ML"],
    introduction: "Research project analyzing ADHD assessment data to identify behavioral patterns across genders.",
    responsibilities: [
      "Analyzed ADHD assessment data for behavioral patterns",
      "Built multi-output classification models",
      "Applied feature engineering and model tuning",
      "Contributed to gender-based ADHD research"
    ],
    outcomes: "Developed interpretable models for ADHD diagnosis prediction with high accuracy across gender classifications.",
    struggles: "Dealing with imbalanced datasets and ensuring model interpretability. Addressed through careful sampling techniques and SHAP analysis.",
    link: "https://github.com/krishna-kalakonda"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    setActiveProject(projects[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setActiveProject(projects[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects Portfolio
          </h1>
          <p className="text-xl text-gray-600">Explore my data science and AI projects</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Project Menu */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">All Projects</h2>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeProject.id === project.id}
                onClick={() => {
                  setActiveProject(project);
                  setCurrentIndex(projects.findIndex(p => p.id === project.id));
                }}
              />
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-blue-800">{activeProject.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{activeProject.period}</p>
                  </div>
                  {activeProject.link && (
                    <Button variant="outline" asChild>
                      <a href={activeProject.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeProject.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Introduction</h3>
                  <p className="text-gray-700">{activeProject.introduction}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {activeProject.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Outcomes</h3>
                  <p className="text-gray-700">{activeProject.outcomes}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Struggles and Solutions</h3>
                  <p className="text-gray-700">{activeProject.struggles}</p>
                </div>

                <div className="flex justify-between pt-6 border-t">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevious}
                    className="flex items-center space-x-2"
                  >
                    <span>← Previous</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleNext}
                    className="flex items-center space-x-2"
                  >
                    <span>Next →</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
