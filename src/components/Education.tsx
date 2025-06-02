
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Master of Science in Data Science",
    university: "DePaul University",
    period: "Sept 2024 – Aug 2026",
    location: "Chicago, USA",
    cgpa: "4.0/4.0",
    skills: ["Advanced Machine Learning", "Deep Learning", "Statistical Analysis", "Big Data Technologies"]
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    university: "Rajiv Gandhi University of Knowledge Technologies",
    period: "Aug 2018 – May 2022",
    location: "Basar, India",
    cgpa: "8.17/10",
    skills: ["Signal Processing", "IoT", "Embedded Systems", "Data Structures"]
  },
  {
    degree: "Pre University Course",
    university: "Rajiv Gandhi University of Knowledge Technologies",
    period: "Jul 2016 – May 2018",
    location: "Basar, India",
    cgpa: "8.99/10",
    skills: ["Mathematics", "Physics", "Chemistry", "Programming Fundamentals"]
  }
];

const Education = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-gray-600">Academic background and learning journey</p>
      </div>
      
      {education.map((edu, index) => (
        <Card key={index} className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl text-purple-800">{edu.degree}</CardTitle>
                <p className="text-lg font-semibold text-pink-700">{edu.university}</p>
                <p className="text-gray-600">{edu.period} • {edu.location}</p>
              </div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                CGPA: {edu.cgpa}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Skills Learned:</h4>
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="border-purple-300 text-purple-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Education;
