export default function Partners() {
    const partners = [
      { name: "ИППиПО «Персона»", logo: "/public/persona.jpg" },
    ];
  
    return (
      <div className="mt-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Наши партнеры</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-200"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="w-32 h-32 object-cover mb-4 rounded-full border border-gray-300" 
              />
              <p className="font-semibold text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  