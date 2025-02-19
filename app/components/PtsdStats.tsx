const ptsdStats = [
  { number: "30%", text: "ветеранов сталкиваются с ПТСР", icon: "/alone_solder.jpg" },
  { number: "40%", text: "не обращаются за помощью", icon: "/zakat.jpg" },
  { number: "60%", text: "испытывают проблемы со сном", icon: "/problem.jpeg" },
  { number: "в 3 раза", text: "выше риск депрессии", icon: "/solder.jpg" },
];

export default function PTSDStats() {
  return (
    <div className="bg-gray-100 text-gray-900 py-5 px-6 max-w-5xl rounded-xl shadow-lg mb-5">
      {/* Заголовок блока */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Почему это важно?</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          ПТСР влияет на тысячи ветеранов, усложняя их повседневную жизнь. 
          Эти цифры показывают, с какими трудностями они сталкиваются каждый день.
        </p>
      </div>

      {/* Статистические карточки */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {ptsdStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden text-center transition-shadow duration-300"
          >
            <img src={stat.icon} alt="" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-4xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-700 mt-2">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

