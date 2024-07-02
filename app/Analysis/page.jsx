'use client';

import React, { useEffect, useState } from 'react';

const Analysis = () => {
  const [analysisData, setAnalysisData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAnalysisData = async () => {
    try {
      const res = await fetch('/api/analysis');
      const data = await res.json();
      setAnalysisData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching analysis data:', error);
    }
  };

  useEffect(() => {
    fetchAnalysisData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-center mb-5">Analysis</h1>
      <div className="flex flex-col items-center space-y-4">
        <p>Total items on the board: {analysisData.totalItems}</p>
        <p>Number of Task tickets: {analysisData.taskCount}</p>
        <p>Number of Bug tickets: {analysisData.bugCount}</p>
        <p>Number of User Story tickets: {analysisData.userStoryCount}</p>
        <p>
          Percentage of board complete:{' '}
          {analysisData.percentageComplete.toFixed(2)}%
        </p>
        <p>Average priority of all tickets: {analysisData.averagePriority}</p>
        <p>
          Tickets created in the last 24 hours:{' '}
          {analysisData.ticketsLast24Hours}
        </p>
      </div>
    </div>
  );
};

export default Analysis;
