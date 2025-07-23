import { Link } from "react-router";
import BackLink from "~/shared/UI/BackLink";

export default function FeedbackSuccess() {
  return (
    <div className="p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 text-gray-100">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-100">Спасибо!</h1>
            <BackLink to="/" />
          </header>

          <main className="space-y-4">
            <p>Ваше сообщение успешно отправлено.</p>
            <p>Мы ответим вам на указанный email в ближайшее время.</p>
            <Link 
              to="/" 
              className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              На главную
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
}