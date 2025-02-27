import React from "react";
import HowItWorks from "~/components/presentation/HowItWorks";
import NewsSlider from "~/components/presentation/NewsSlider";
import PTSDStats from "~/components/presentation/PtsdStats";
import HeroSection from "~/components/presentation/HeroSection";

const PresentationPage: React.FC = () => {


    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col items-center p-6">
            {/* Заголовок и описание проекта */}
            <HeroSection/>
            <PTSDStats />
            <NewsSlider />
            <HowItWorks />
            
            {/* Преимущества проекта */}
            <div className="mt-16 max-w-5xl text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Как работает проект?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "✅ Поддержка 24/7", text: "Наш сервис всегда доступен для тех, кто нуждается в помощи." },
                        { title: "🤝 Сообщество", text: "Мы создаем безопасное пространство для общения и взаимопомощи." },
                        { title: "📈 Личный прогресс", text: "Интерактивные тесты и дневники помогут видеть изменения в состоянии." }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 border border-gray-200"
                        >
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Частые вопросы */}
            <div className="mt-16 max-w-5xl w-full text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Частые вопросы</h2>
                <div className="text-left">
                    {[
                        { question: "Как я могу получить помощь?", answer: "Заполните анкету на сайте, и наш специалист свяжется с вами." },
                        { question: "Могу ли я помочь проекту?", answer: "Да! Вы можете стать волонтером или поддержать нас финансово." },
                        { question: "Кто может участвовать?", answer: "Все участники боевых действий, испытывающие психологические трудности, могут обратиться к нам." }
                    ].map((faq, index) => (
                        <details key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
                            <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                            <p className="text-gray-600 mt-2">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PresentationPage;
