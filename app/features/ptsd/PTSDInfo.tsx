import BackLink from "~/shared/UI/BackLink";

export default function PTSDInfo() {
    return (
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-900">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center text-gray-900">
          Что такое ПТСР?
        </h1>
        <BackLink to="/"/>
        <div className="prose prose-lg text-gray-700 mx-auto">
          <p className="mb-6">
            <strong>Посттравматическое стрессовое расстройство (ПТСР)</strong> — это психическое состояние, которое может развиться после переживания или столкновения с травмирующим событием, таким как участие в боевых действиях, стихийное бедствие или насилие.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Основные симптомы</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Повторяющиеся воспоминания или кошмары о травме</li>
            <li>Избегание мест, людей или мыслей, связанных с событием</li>
            <li>Повышенная тревожность и раздражительность</li>
            <li>Проблемы со сном и концентрацией</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Почему это важно?</h2>
          <p className="mb-6">
            ПТСР затрагивает не только самих пострадавших, но и их семьи, друзей и общество в целом. Своевременная помощь и поддержка могут существенно снизить влияние этих симптомов и вернуть человеку качество жизни.
          </p>
        </div>
      </section>
    );
  }