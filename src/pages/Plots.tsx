
import React from 'react';
import Plots from '../components/Plots';

const PlotsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Plots />
      </div>
    </div>
  );
};

export default PlotsPage;
