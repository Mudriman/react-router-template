import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Импортируем анимации

interface SupportLetter {
  name: string;
  img: string;
  description?: string; // Опциональное поле
}

const teamMembers = [
  {
    name: "Роман Медяник",
    img: "roman_logo.jpg",
    text: "Невозможно оставаться равнодушным к проблемам других людей, когда на кону их жизни."
  },
  {
    name: "Захар Карнаухов",
    img: "zahar_logo.jpg",
    text: "Я понял, что нужно что-то менять, а самое главное, что это в моих силах!"
  },
  {
    name: "Мудриченко Никита",
    img: "nikita_avatar.jpg",
    text: "Этот проект стал выполнением моего гражданского долга."
  }
];

const specialists = [
  {
    name: "Татьяна Карнаухова",
    role: "Финансовый консультант",
    img: "anton_finance.jpg",
    text: "Обеспечение финансовой устойчивости проекта – моя ключевая задача. Уверена, что слаженная работа команды приведет нас к успеху."
  },
  {
    name: "Всеволод Должанов",
    role: "Врач-невролог",
    img: "dmitry_doctor.jpg",
    text: "ФГБУ ВО 'Воронежский Государственный Медицинский Университет им. Н. Н. Бурденко' МЗ России. Моя цель – поддержка ветеранов в процессе их реабилитации."
  },
  {
    name: "Латынцева Алла",
    role: " Медицинский психолог",
    img: "psiholog_logo.jpg",
    text: "КУЗ ВО «ВОКПНД», медицинский психолог патопсихологической лаборатории, высшей квалификационной категории, являюсь аккредитованным специалистом."
  }
];

const supportLetters: SupportLetter[] = [
  {
    name: "Администрация Северского района",
    img: "Letter1.jpg",
    description: "Информационная и методическая поддержка проекта"
  },
  {
    name: 'ИППиПО «Персона»',
    img: "Letter2.jpg",
    description: "Софинансирование проекта"
  },
  {
    name: "Фонд «Защитники отечества»",
    img: "Letter3.jpg",
    description: "Партнёрство и сотрудничество"
  },
  {
    name: "ИП Карнаухова Т.В.",
    img: "Letter4.jpg",
    description: "Экспертная поддержка реализации"
  }
];

const Team = () => {
  const [selectedLetter, setSelectedLetter] = useState<SupportLetter | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6">
      {/* Блок о проекте */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-800">О проекте</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
          Мы создаем поддержку для участников боевых действий, помогая им преодолеть последствия ПТСР.
          Наш проект – это не просто идея, а реальный шанс изменить жизни людей к лучшему.
        </p>
      </motion.div>

      {/* История создания */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-5xl mx-auto border border-gray-200 mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Как всё началось</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Несколько лет назад, увидев, с какими сложностями сталкиваются участники боевых действий, мы поняли,
          что просто сочувствия недостаточно. Нужно было создать реальную систему поддержки.
          Так появилась идея нашего проекта — платформы, которая помогает людям, прошедшим через боевые действия,
          найти поддержку, единомышленников и необходимые ресурсы.
        </p>
      </motion.div>

      {/* Основатель проекта */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-5xl mx-auto border border-gray-200"
      >
        <div className="w-40 h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 flex-shrink-0 rounded-full overflow-hidden shadow-md mb-6 md:mb-0 md:mr-8">
          <img src="/zahar_dyadya.png" alt="Александр Бендерский" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-2xl font-light italic text-gray-700 mb-4 leading-relaxed">
            “Каждый из нас сталкивался с болью, страхом или потерей. Но для тех, кто пережил травму,
            эти чувства не всегда остаются в прошлом. Наш проект родился из простой идеи:
            никто не должен оставаться наедине со своей болью.”
          </p>
          <div className="space-y-1">
            <p className="text-gray-500 uppercase tracking-wide text-sm font-bold">
              Инициатор проекта
            </p>
            <p className="text-gray-900 font-bold text-lg">Александр Бендерский</p>
          </div>
        </div>
      </motion.div>

      {/* Лидеры проекта */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 max-w-5xl w-full text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Лидеры проекта</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 text-center"
            >
              <motion.img 
                src={`/${member.img}`} 
                alt={member.name} 
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md border border-gray-200"
                whileHover={{ scale: 1.1 }}
              />
              <p className="mt-6 font-bold text-xl text-gray-900">{member.name}</p>
              <p className="text-lg text-gray-600 mt-2">{member.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Специалисты проекта */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 max-w-5xl w-full text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Наши специалисты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {specialists.map((specialist, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-300 text-center"
            >
              <motion.img 
                src={`/${specialist.img}`} 
                alt={specialist.name} 
                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md border border-gray-200"
                whileHover={{ scale: 1.1 }}
              />
              <p className="mt-6 font-bold text-xl text-gray-900">{specialist.name}</p>
              <p className="text-gray-500 font-semibold">{specialist.role}</p>
              <p className="text-lg text-gray-700 mt-2">{specialist.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Письма поддержки */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 max-w-5xl w-full text-center"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Нас поддерживают</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportLetters.map((letter, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 cursor-pointer"
              onClick={() => setSelectedLetter(letter)}
            >
              <motion.img
                src={`/${letter.img}`}
                alt={`Письмо поддержки от ${letter.name}`}
                className="w-full h-auto object-contain rounded-md border border-gray-100"
                whileHover={{ scale: 1.05 }}
              />
              <p className="mt-4 font-semibold text-gray-800">{letter.name}</p>
              {letter.description && (
                <p className="text-gray-600 mt-2">{letter.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Контакты */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 max-w-5xl text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800">Как с нами связаться?</h2>
        <p className="text-lg text-gray-600 mt-4">
          Мы всегда открыты к сотрудничеству. Если у вас есть вопросы или предложения, пишите нам!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sagkzizni@gmail.com" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Написать на Email
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://t.me/shagjizni2025" 
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            Наш Telegram
          </motion.a>
        </div>
      </motion.div>

      {/* Модальное окно для писем поддержки */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
                onClick={() => setSelectedLetter(null)}
              >
                ✕
              </motion.button>
              <motion.img
                src={`/${selectedLetter.img}`}
                alt={`Письмо поддержки от ${selectedLetter.name}`}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-center"
              >
                <p className="font-semibold text-gray-800">{selectedLetter.name}</p>
                {selectedLetter.description && (
                  <p className="text-gray-600 mt-2">{selectedLetter.description}</p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;