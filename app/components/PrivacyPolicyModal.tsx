// app/components/PrivacyPolicyModal.tsx
import { useEffect } from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    console.log("PrivacyPolicyModal mounted, isOpen:", isOpen);
    // Закрытие по нажатию Esc
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[1000] p-4 transition-opacity duration-300"
      onClick={onClose} // Закрытие при клике на фон
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Политика безопасности
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
            aria-label="Закрыть"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Мы серьёзно относимся к защите ваших данных. Эта политика описывает, как мы собираем, используем и защищаем вашу информацию.
          </p>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Сбор данных</h4>
            <p className="mt-1">
              Мы собираем только необходимые данные, такие как ваше имя и email, для предоставления услуг. Все данные хранятся в зашифрованном виде.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Использование данных</h4>
            <p className="mt-1">
              Ваши данные используются исключительно для улучшения вашего опыта в приложении и не передаются третьим лицам без вашего согласия.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Безопасность</h4>
            <p className="mt-1">
              Мы применяем современные методы шифрования и регулярно обновляем системы безопасности, чтобы защитить вашу информацию.
            </p>
          </div>
          <p className="italic text-sm">
            Если у вас есть вопросы, свяжитесь с нами по адресу{" "}
            <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
              support@example.com
            </a>.
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 dark:bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}