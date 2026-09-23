import { categories } from "../data/recipes";

export default function Categories() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-[#FFD700]">|</span> Categorie
          </h2>
          <a href="#" className="text-[#FFD700] font-medium text-sm hover:underline">
            Vedi tutte <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#FFD700]"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: category.color + "20" }}
              >
                {category.icon}
              </div>
              <span className="text-xs font-medium text-gray-700 text-center group-hover:text-[#FFD700] transition-colors">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
