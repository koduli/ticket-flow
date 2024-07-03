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
      <h1 className="text-4xl text-center mb-14 text-white">Analysis</h1>
      <div className="flex justify-center">
        <table className="custom-table">
          <thead className="bg-gray-800">
            <tr>
              <th className="custom-table">Metric</th>
              <th className="custom-table">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="custom-table">Total number of tickets</td>
              <td className="custom-table">{analysisData.totalItems}</td>
            </tr>
            <tr>
              <td className="custom-table">Number of tasks</td>
              <td className="custom-table">{analysisData.taskCount}</td>
            </tr>
            <tr>
              <td className="custom-table">Number of bugs</td>
              <td className="custom-table">{analysisData.bugCount}</td>
            </tr>
            <tr>
              <td className="custom-table">Number of user stories</td>
              <td className="custom-table">{analysisData.userStoryCount}</td>
            </tr>
            <tr>
              <td className="custom-table">Board completion in percentage</td>
              <td className="custom-table">
                {analysisData.percentageComplete.toFixed(2)}%
              </td>
            </tr>
            <tr>
              <td className="custom-table">
                Average priority across all tickets
              </td>
              <td className="custom-table">{analysisData.averagePriority}</td>
            </tr>
            <tr>
              <td className="custom-table">
                Number of tickets created in the last 24 hours
              </td>
              <td className="custom-table">
                {analysisData.ticketsLast24Hours}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analysis;
