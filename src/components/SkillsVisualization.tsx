
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "Python", rating: 5, category: "Programming" },
  { name: "Machine Learning", rating: 5, category: "AI/ML" },
  { name: "R", rating: 4, category: "Programming" },
  { name: "JavaScript", rating: 4, category: "Programming" },
  { name: "React", rating: 4, category: "Frontend" },
  { name: "Deep Learning", rating: 4, category: "AI/ML" },
  { name: "NLP", rating: 5, category: "AI/ML" },
  { name: "PostgreSQL", rating: 4, category: "Database" },
  { name: "AWS", rating: 3, category: "Cloud" },
  { name: "Docker", rating: 3, category: "DevOps" }
];

const SkillsVisualization = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-600">My expertise across different technologies</p>
      </div>
      
      {categories.map(category => (
        <Card key={category} className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">{category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.filter(skill => skill.category === category).map(skill => (
                <div key={skill.name} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex">{renderStars(skill.rating)}</div>
                    <Progress value={skill.rating * 20} className="w-20 h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsVisualization;
