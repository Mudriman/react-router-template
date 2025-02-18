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
      <section className="py-5 bg-gray-100 rounded-xl shadow-lg max-w-5xl ">
        <div className="container mx-auto text-center ">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
              >
                <div className="text-4xl text-orange-500 mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  