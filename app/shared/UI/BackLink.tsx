import { NavLink } from "react-router";

interface BackLinkProps {
  to: string;
  label?: string;
  className?: string;
  iconClassName?: string;
}

export default function BackLink({
  to,
  label = "Вернуться назад",
  className = "mt-3 mb-6 flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200",
  iconClassName = "w-6 h-6 mr-2",
}: BackLinkProps) {
  return (
    <NavLink to={to} className={className} aria-label={label}>
      <svg
        className={iconClassName}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {label}
    </NavLink>
  );
}