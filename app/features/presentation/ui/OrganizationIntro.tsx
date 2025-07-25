import { motion } from "framer-motion";

export default function OrganizationIntro() {
  const handleImageClick = () => {
    window.open(process.env.VITE_BRATSTVO_WEBSITE_URL, "_blank");
  };

  return (
    <section className="px-4 mb-6 text-gray-900 from-gray-50 to-gray-100 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl px-4 mx-auto sm:px-0"
      >
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
          <motion.img
            src="/boevoe-bratstvo.png"
            alt="Логотип 'Боевое братство'"
            className="w-full h-auto rounded-lg border border-gray-200 shadow-md object-contain sm:w-1/2 cursor-pointer"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={handleImageClick}
          />
          
          <div className="text-left sm:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-blue-600 sm:text-3xl">
              Инициатор проекта
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              <strong className="text-gray-900">
                Северское районное отделение Краснодарского краевого отделения Всероссийской общественной организации ветеранов «Боевое братство»
              </strong> — общественная организация, инициировавшая проект «Шаг к жизни» 
              и играющая ключевую роль в его реализации и развитии.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}