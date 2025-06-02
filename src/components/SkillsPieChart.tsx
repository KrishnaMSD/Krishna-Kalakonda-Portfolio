
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = [
  { name: 'Python', value: 25, color: '#3B82F6' },
  { name: 'Data Visualization', value: 15, color: '#10B981' },
  { name: 'Database Management', value: 15, color: '#8B5CF6' },
  { name: 'Machine Learning', value: 10, color: '#F59E0B' },
  { name: 'LLMs', value: 10, color: '#EF4444' },
  { name: 'Front End', value: 10, color: '#06B6D4' },
  { name: 'Other', value: 8, color: '#84CC16' },
  { name: 'Deep Learning', value: 5, color: '#F97316' },
  { name: 'GitHub', value: 2, color: '#6B7280' },
  { name: 'Docker', value: 1, color: '#1F2937' }
];

const SkillsPieChart = () => {
  const renderCustomizedLabel = ({ cx, cy }: { cx: number; cy: number }) => {
    return (
      <text 
        x={cx} 
        y={cy} 
        fill="#1F2937" 
        textAnchor="middle" 
        dominantBaseline="central"
        className="text-sm font-bold"
      >
        <tspan x={cx} dy="-0.5em">Full Stack</tspan>
        <tspan x={cx} dy="1.2em">Data Scientist</tspan>
      </text>
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills Distribution
        </h2>
        <p className="text-gray-600">Breakdown of my technical expertise</p>
      </div>
      
      <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={skillsData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={140}
                paddingAngle={2}
                dataKey="value"
                label={renderCustomizedLabel}
              >
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Proficiency']}
                labelStyle={{ color: '#1F2937' }}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span style={{ color: '#374151' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsPieChart;
