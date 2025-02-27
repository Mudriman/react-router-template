import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface MoodData {
  mood: number;
  moodColor: string;
}

interface MoodStatsProps {
  data: MoodData[];
  period: string;
  onPeriodChange: (newPeriod: "7" | "14" | "30") => void;
}

const MoodStats: React.FC<MoodStatsProps> = ({ data, period, onPeriodChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md text-gray-900 dark:text-gray-100">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Статистика настроения</h2>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => onPeriodChange("7")}
          className={`px-3 py-1 rounded-lg ${
            period === "7"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          } hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors`}
        >
          7 дней
        </button>
        <button
          onClick={() => onPeriodChange("14")}
          className={`px-3 py-1 rounded-lg ${
            period === "14"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          } hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors`}
        >
          14 дней
        </button>
        <button
          onClick={() => onPeriodChange("30")}
          className={`px-3 py-1 rounded-lg ${
            period === "30"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          } hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors`}
        >
          30 дней
        </button>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" className="dark:stroke-gray-600" />
          <XAxis dataKey="date" type="category" hide={true} />
          <YAxis domain={[1, 10]} type="number" hide={true} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              color: "#374151",
            }}
            itemStyle={{ color: "#374151" }}
          />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodStats;