import { useEffect, useState } from "react";
import { useAuthStore } from "../admin/store/authStore";
import type { Test } from "~/shared/types";
import { profileAPI } from "~/api/api";

export default function Profile() {
  const { user, logout } = useAuthStore();
  const [tests, setTests] = useState<Test[]>([]);

  if (!user) {
    return <div>Пользователь не авторизован</div>;
  }

  useEffect(() => {
  if (user) {
    profileAPI.getMyTests()
      .then((data) => {
        console.log("Тесты с сервера:", data);
        setTests(data);
        console.log("Тесты с сервера:", data);
      })
      .catch(console.error);
  }
}, [user]);



  return (
    <div className=" container mx-auto px-4 space-y-6  sm:px-6 lg:px-8">
     <h1 className="text-3xl font-bold text-gray-900  mb-8">
    Профиль пользователя
  </h1>

  {/* Информация о пользователе */}
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
    <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
      Личная информация
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
          Email
        </label>
        <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {user.email}
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
          Пройдено тестов
        </label>
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          {tests.length}
        </p>
      </div>
    </div>
  </div>

  {/* Результаты тестов */}
  {tests.length > 0 ? (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
        <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        История тестов
      </h2>

      <div className="space-y-4">
        {tests.map((test) => (
          <div 
            key={test.id} 
            className="border border-gray-200 dark:border-gray-600 rounded-xl p-5 hover:shadow-md transition-shadow bg-gray-50 dark:bg-gray-700"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {test.type || `Тест #${test.id}`}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full">
                {new Date(test.createdAt).toLocaleDateString("ru-RU")}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {test.score}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  набрано баллов
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
      <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">Вы еще не прошли ни одного теста</p>
      <p className="text-gray-400 dark:text-gray-500 text-sm">Начните свой первый тест и отслеживайте прогресс здесь</p>
    </div>
  )}

  <button
    onClick={logout}
    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
    <span>Выйти из аккаунта</span>
  </button>
</div>
  );
}