interface TestStatusCellProps {
  tests?: Array<{ // Делаем опциональным
    type: string;
    score: number;
    createdAt: string;
  }>;
}

export const TestStatusCell = ({ tests = [] }: TestStatusCellProps) => { // Значение по умолчанию
  const testNames: Record<string, string> = {
    ptsd: "ПТСР",
    taylor: "Тейлора",
    beck: "Бека",
    bassDarki: "Басса-Дарки"
  };

  if (!tests || tests.length === 0) { // Явная проверка
    return <span className="text-gray-400">Нет тестов</span>;
  }

  return (
    <div className="flex flex-col gap-1">
      {tests.map((test) => (
        <div key={`${test.type}-${test.createdAt}`} className="flex items-center gap-2">
          <span className="text-sm font-medium">{testNames[test.type] || test.type}</span>
          <span className="text-xs text-gray-500">{test.score} баллов</span>
        </div>
      ))}
    </div>
  );
};