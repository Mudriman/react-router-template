import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MoodData {
  date: string;
  mood: number;
  moodColor: string; // Color for mood indication
}

interface MoodStatsProps {
  data: MoodData[];
}

const MoodStats: React.FC<MoodStatsProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Статистика настроения</h2>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          data={data} // Use filtered data directly
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            type="category"
            hide={true} // Hide labels for simplicity on mobile
          />
          <YAxis
            domain={[1, 10]}
            type="number"
            hide={true} // Hide labels for simplicity on mobile
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#4a90e2"
            strokeWidth={2}
            dot={false} // Remove dots for simplicity
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodStats;