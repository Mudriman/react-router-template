import { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  time: string;
  icon?: React.ReactNode;
}

export const RecentActivity = () => {
  const [activities] = useState<ActivityItem[]>([
    { 
      id: '1', 
      user: 'user@example.com', 
      action: 'Вход в систему', 
      time: '2 мин назад',
      icon: <ClockIcon className="h-5 w-5 text-gray-400" />
    },
    { 
      id: '2', 
      user: 'admin@example.com', 
      action: 'Изменение роли пользователя', 
      time: '10 мин назад',
      icon: <ClockIcon className="h-5 w-5 text-gray-400" />
    },
    { 
      id: '3', 
      user: 'test@example.com', 
      action: 'Прохождение теста', 
      time: '1 час назад',
      icon: <ClockIcon className="h-5 w-5 text-gray-400" />
    }
  ]);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Последняя активность</h2>
        <ul className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id} className="py-3">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.user}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {activity.action}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  {activity.time}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};