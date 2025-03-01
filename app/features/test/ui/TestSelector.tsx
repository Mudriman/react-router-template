import React from "react";
import { tests } from "~/features/test/model/testConfig";

interface TestSelectorProps {
  activeTest: string;
  onTestChange: (test: string) => void;
  submitted: { [key: string]: boolean };
}

const TestSelector: React.FC<TestSelectorProps> = ({ activeTest, onTestChange, submitted }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 dark:text-gray-300 mb-2">Выберите тест:</label>
      <select
        value={activeTest}
        onChange={(e) => onTestChange(e.target.value)}
        className="w-full p-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.entries(tests).map(([key, test]) => (
          <option key={key} value={key} disabled={submitted[key as keyof typeof tests]}>
            {test.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TestSelector;