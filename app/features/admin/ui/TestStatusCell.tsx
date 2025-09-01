import { X } from "lucide-react";

interface TestStatusCellProps {
  userId: string;
  tests?: Array<{
    id: string;
    type: string;
    score: number;
    createdAt: string;
  }>;
  onDeleteTest: (testId: string) => void; // ← Только ID теста!
}

export const TestStatusCell = ({ userId, tests = [], onDeleteTest }: TestStatusCellProps) => {
  const testNames: Record<string, string> = {
    ptsd: "ПТСР",
    taylor: "Тейлора", 
    beck: "Бека",
    bassDarki: "Басса-Дарки",
  };

  if (!tests || tests.length === 0) {
    return <span className="text-gray-400">Нет тестов</span>;
  }

  return (
    <div className="flex flex-col gap-1">
      {tests.map((test) => (
        <div
          key={test.id} // ← Используйте ID как ключ
          className="flex items-center justify-between rounded-md bg-gray-100 px-2 py-1 text-sm"
        >
          <div className="flex flex-col">
            <span className="font-medium">{testNames[test.type] || test.type}</span>
            <span className="text-xs text-gray-500">
              {test.score} баллов • {new Date(test.createdAt).toLocaleDateString("ru-RU")}
            </span>
          </div>

          {/* <button
            onClick={() => onDeleteTest(test.id)} // ← Передаем только ID теста!
            className="text-gray-400 hover:text-red-600 transition"
            title="Удалить тест"
          >
            <X size={14} />
          </button> */}
        </div>
      ))}
    </div>
  );
};