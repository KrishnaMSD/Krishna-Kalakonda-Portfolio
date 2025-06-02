
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  period: string;
  skills: string[];
  introduction: string;
  responsibilities: string[];
  outcomes: string;
  struggles: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

const ProjectCard = ({ project, isActive, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 ${
        isActive 
          ? 'border-blue-500 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50' 
          : 'hover:shadow-md border-gray-200'
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className={`text-lg ${isActive ? 'text-blue-800' : 'text-gray-800'}`}>
          {project.title}
        </CardTitle>
        <p className="text-sm text-gray-600">{project.period}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {project.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.skills.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
