import { useAuthStore } from "../admin/store/authStore";

export default function Profile() {
  const { user, logout } = useAuthStore();

  if (!user) {
    return <div>Пользователь не авторизован</div>;
  }

  return (
    <div className="container mx-auto px-4 space-y-6  sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Профиль пользователя</h1>

      {/* Информация о пользователе */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Личная информация</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">
              Email
            </label>
            <p className="mt-1 text-lg text-gray-900 dark:text-gray-100">{user.email}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-200">
              Пройдено тестов
            </label>
            <p className="mt-1 text-lg text-gray-900 dark:text-gray-100">{user.tests?.length || 0}</p>
          </div>
        </div>
      </div>

      {/* Результаты тестов */}
      {user.tests && user.tests.length > 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">История тестов</h2>

          <div className="space-y-4">
            {user.tests.map((test, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{test.type}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(test.createdAt).toLocaleDateString('ru-RU')}
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {test.score}
                  </div>
                  <div className="text-sm text-gray-600">
                    Баллы: {test.score}
                  </div>
                </div>

                <div className="mt-2 text-xs text-gray-500">
                  ID теста: {test.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <p className="text-gray-500">Вы еще не прошли ни одного теста</p>
        </div>
      )}
      
      <button
        onClick={logout}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md transition-colors font-semibold"
      >
        Выйти из аккаунта
      </button>
    </div>
  );
}