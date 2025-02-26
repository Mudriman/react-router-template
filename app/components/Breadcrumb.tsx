import { useLocation, NavLink } from "react-router";
import { HomeIcon } from "@heroicons/react/24/solid";

const breadcrumbMap: Record<string, string> = {
  comand: "Команда",
  prototype: "Прототип системы",
  feedback: "Обратная связь",
  test: "Тестирование",
  meditation: "Медитации",
  psinstrument: "Персональный дневник",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg" aria-label="Хлебные крошки">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center">
          {/* Домашняя иконка */}
          <li>
            <NavLink
              to="/"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="На главную"
            >
              <HomeIcon className="w-6 h-6" />
            </NavLink>
          </li>

          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const label = breadcrumbMap[value] || decodeURIComponent(value);

            return (
              <li key={to} className="flex items-center" aria-current={isLast ? "page" : undefined}>
                {/* Разделитель */}
                <svg className="mx-3 text-gray-500 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                {isLast ? (
                  <span className="text-white font-medium">{label}</span>
                ) : (
                  <NavLink
                    to={to}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
