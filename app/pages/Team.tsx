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

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6">
      {/* Блок о проекте */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-800">О проекте</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
          Мы создаем поддержку для участников боевых действий, помогая им преодолеть последствия ПТСР.
          Наш проект – это не просто идея, а реальный шанс изменить жизни людей к лучшему.
        </p>
      </div>

      {/* История создания */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-5xl mx-auto border border-gray-200 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Как всё началось</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Несколько лет назад, увидев, с какими сложностями сталкиваются участники боевых действий, мы поняли, 
          что просто сочувствия недостаточно. Нужно было создать реальную систему поддержки. 
          Так появилась идея нашего проекта — платформы, которая помогает людям, прошедшим через боевые действия, 
          найти поддержку, единомышленников и необходимые ресурсы.
        </p>
      </div>

      {/* Основатель проекта */}
      <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-5xl mx-auto border border-gray-200">
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
      </div>

      {/* Лидеры проекта */}
      <div className="mt-10 max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Лидеры проекта</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 text-center hover:scale-105 transition-transform duration-300">
              <img src={`/${member.img}`} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto shadow-md border border-gray-200" />
              <p className="mt-6 font-bold text-xl text-gray-900">{member.name}</p>
              <p className="text-lg text-gray-600 mt-2">{member.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Специалисты проекта */}
      <div className="mt-10 max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Наши специалисты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {specialists.map((specialist, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-300 text-center hover:scale-105 transition-transform duration-300">
              <img src={`/${specialist.img}`} alt={specialist.name} className="w-32 h-32 object-cover rounded-full mx-auto shadow-md border border-gray-200" />
              <p className="mt-6 font-bold text-xl text-gray-900">{specialist.name}</p>
              <p className="text-gray-500 font-semibold">{specialist.role}</p>
              <p className="text-lg text-gray-700 mt-2">{specialist.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Контакты */}
      <div className="mt-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">Как с нами связаться?</h2>
        <p className="text-lg text-gray-600 mt-4">
          Мы всегда открыты к сотрудничеству. Если у вас есть вопросы или предложения, пишите нам!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <a href="mailto:support@project.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Написать на Email
          </a>
          <a href="https://t.me/shagjizni2025" className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition">
            Наш Telegram
          </a>
        </div>
      </div>

    </div>
  );
};

export default Team;
