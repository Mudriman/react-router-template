import { ServerIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import { CircleStackIcon } from "@heroicons/react/24/solid";

interface StatusItem {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'warning';
  icon: React.ReactNode;
}

export const SystemStatus = () => {
  const statusItems: StatusItem[] = [
    {
      id: '1',
      name: 'Основной сервер',
      status: 'online',
      icon: <ServerIcon className="h-5 w-5 text-green-500" />
    },
    {
      id: '2',
      name: 'База данных',
      status: 'online',
      icon: <CircleStackIcon className="h-5 w-5 text-green-500" />
    },
    {
      id: '3',
      name: 'Фоновые задачи',
      status: 'warning',
      icon: <CpuChipIcon className="h-5 w-5 text-yellow-500" />
    }
  ];

  const getStatusColor = (status: StatusItem['status']) => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'offline': return 'text-red-500';
      case 'warning': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Статус системы</h2>
        <ul className="space-y-3">
          {statusItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                {item.icon}
                <span className="ml-3 text-sm font-medium text-gray-900">{item.name}</span>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(item.status)}`}>
                {item.status === 'online' ? 'Работает' : item.status === 'warning' ? 'Проблемы' : 'Отключен'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};