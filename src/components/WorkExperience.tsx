
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const workExperience = [
  {
    title: "Graduate Student Assistant",
    company: "DePaul University",
    period: "Feb 2025 – Present",
    location: "Chicago, USA",
    achievements: [
      "Conduct data analysis on Chicago food farms",
      "Design database architecture for farm data management",
      "Design React dashboard for farms data visualization"
    ],
    testimonial: "Krishna brings exceptional analytical skills and technical expertise to our research team.",
    quantitativeResults: "Improved data processing efficiency by 60%"
  },
  {
    title: "Associate Data Scientist",
    company: "App Virality Technologies (Outplay)",
    period: "June 2022 – May 2024",
    location: "Hyderabad, India",
    achievements: [
      "Developed AI tools using LLMs leading to 80% improvement in email outreach",
      "Built objection handler with 95% accuracy",
      "Deployed phone verification system boosting call outreach by 120%",
      "Reduced system errors by 90% through optimization"
    ],
    testimonial: "Top Performer of the Month - Krishna consistently delivers high-impact solutions.",
    quantitativeResults: "80% improvement in email outreach, 120% boost in call outreach"
  }
];

const WorkExperience = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-gray-600">Professional journey and achievements</p>
      </div>
      
      {workExperience.map((job, index) => (
        <Card key={index} className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl text-green-800">{job.title}</CardTitle>
                <p className="text-lg font-semibold text-blue-700">{job.company}</p>
                <p className="text-gray-600">{job.period} • {job.location}</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {job.period.split(' – ')[0]}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">Quantitative Results:</h4>
              <p className="text-blue-700 font-medium">{job.quantitativeResults}</p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-gray-800 mb-2">Testimonial:</h4>
              <p className="text-gray-700 italic">"{job.testimonial}"</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WorkExperience;
