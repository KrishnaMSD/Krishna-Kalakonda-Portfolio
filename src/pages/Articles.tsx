
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Building AI-Powered Sales Tools: A Complete Guide",
    description: "A comprehensive guide on developing AI tools for sales automation using LLMs and machine learning techniques.",
    date: "March 2024",
    readTime: "8 min read",
    tags: ["AI", "Sales", "LLMs", "Automation"],
    link: "https://medium.com/@krishna-kalakonda",
    preview: "Discover how to build sophisticated AI sales tools that can automate email outreach, handle objections, and improve sales outcomes. This article covers the complete development process from data collection to deployment."
  },
  {
    title: "Understanding ADHD Patterns Through Data Science",
    description: "Exploring gender-based differences in ADHD assessment data using machine learning and statistical analysis.",
    date: "April 2025",
    readTime: "6 min read",
    tags: ["Data Science", "Healthcare", "Machine Learning", "Research"],
    link: "https://medium.com/@krishna-kalakonda",
    preview: "A deep dive into how data science can help understand behavioral patterns in ADHD across different genders, providing insights for more personalized assessment strategies."
  },
  {
    title: "From Electronics to Data Science: My Career Transition",
    description: "My journey from electronics engineering to becoming a full-stack data scientist and the lessons learned along the way.",
    date: "February 2024",
    readTime: "5 min read",
    tags: ["Career", "Data Science", "Personal Growth"],
    link: "https://medium.com/@krishna-kalakonda",
    preview: "Personal insights and practical advice for engineers looking to transition into data science, including skills to develop and common challenges to expect."
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Articles & Insights
          </h1>
          <p className="text-xl text-gray-600">Sharing knowledge about data science, AI, and technology</p>
        </div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-green-800 mb-2">
                      {article.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-3">{article.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-green-100 text-green-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {article.preview}
                </p>
                <Button 
                  variant="outline" 
                  className="border-green-300 text-green-700 hover:bg-green-50"
                  asChild
                >
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    Read Article →
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to read more of my articles?</p>
          <Button 
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            asChild
          >
            <a href="https://medium.com/@krishna-kalakonda" target="_blank" rel="noopener noreferrer">
              Visit My Medium Profile
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
