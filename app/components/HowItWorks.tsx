export default function HowItWorks() {
    const steps = [
      {
        title: "Свяжитесь с нами",
        description: "Позвоните или оставьте заявку на сайте",
        icon: "📞",
      },
      {
        title: "Консультация",
        description: "Встреча с нашими специалистами",
        icon: "🧑‍⚕️",
      },
      {
        title: "План поддержки",
        description: "Разработка индивидуального плана",
        icon: "📅",
      },
      {
        title: "Восстановление",
        description: "Регулярные сессии и поддержка",
        icon: "❤️",
      },
    ];
  
    return (
      <section className="py-8 bg-gray-100 rounded-xl shadow-lg max-w-6xl mx-auto">
        <div className="container mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-lg"
              >
                <div className="text-4xl text-orange-500 mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  