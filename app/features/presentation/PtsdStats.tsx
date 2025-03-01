import { motion } from "framer-motion";

const ptsdStats = [
  { number: "30%", text: "ветеранов сталкиваются с ПТСР", detail: "Каждый третий борется с невидимыми ранами." },
  { number: "40%", text: "не обращаются за помощью", detail: "Стигма и страх мешают исцелению." },
  { number: "60%", text: "испытывают проблемы со сном", detail: "Ночь становится временем кошмаров." }
];

export default function PtsdStats() {
  return (
    <section className="px-4 sm:px-6 lg:px-8  from-gray-50 to-gray-100 text-gray-900 mb-6">
      <div className="max-w-5xl mx-auto rounded-2xl shadow-lg overflow-hidden">
        <header className="text-center mb-10 px-4 pt-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-wide bg-clip-text ">
            ПТСР: Цифры и Реальность
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Эти данные — не просто статистика, а отражение ежедневной борьбы тысяч людей.
          </p>
        </header>

        <div className="relative px-4 pb-8">
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-[calc(100%-2rem)] left-4 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {ptsdStats.map((stat, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white hover:bg-blue-50 transition-shadow shadow-md hover:shadow-lg rounded-xl p-5 border-b-4 border-blue-500"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.number}</h3>
                <p className="text-gray-700 text-sm sm:text-base font-medium mt-2">{stat.text}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 italic">{stat.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}