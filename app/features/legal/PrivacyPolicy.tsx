import BackLink from "~/shared/UI/BackLink";


export default function PrivacyPolicyPage() {
  return (
    <div className="p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-gray-100">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-100">
              Политика безопасности
            </h1>
            <BackLink to="/" />
          </header>

          <main className="space-y-8">
            <section>
              <p className="text-lg leading-relaxed text-gray-200">
                Мы серьёзно относимся к защите ваших данных. Эта политика описывает, как мы собираем, используем и защищаем вашу информацию.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-100">
                Сбор данных
              </h2>
              <p className="mt-2 leading-relaxed text-gray-200">
                Мы собираем только необходимые данные, такие как ваше имя и email, для предоставления услуг. Все данные хранятся в зашифрованном виде.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-100">
                Использование данных
              </h2>
              <p className="mt-2 leading-relaxed text-gray-200">
                Ваши данные используются исключительно для улучшения вашего опыта в приложении и не передаются третьим лицам без вашего согласия.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-100">
                Безопасность
              </h2>
              <p className="mt-2 leading-relaxed text-gray-200">
                Мы применяем современные методы шифрования и регулярно обновляем системы безопасности, чтобы защитить вашу информацию.
              </p>
            </section>

            <section>
              <p className="italic text-gray-200">
                Если у вас есть вопросы, свяжитесь с нами по адресу{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-blue-400 hover:underline"
                >
                  sagkzizni@gmail.com
                </a>.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}