import { Recipe } from "../data/recipes";
import LazyImage from "./LazyImage";

interface RecipeCardProps {
  recipe: Recipe;
  variant?: "default" | "large" | "horizontal";
}

export default function RecipeCard({ recipe, variant = "default" }: RecipeCardProps) {
  if (variant === "horizontal") {
    return (
      <div className="flex bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
        <div className="w-32 h-32 flex-shrink-0">
          <LazyImage
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full"
            width={128}
            height={128}
          />
        </div>
        <div className="p-3 flex flex-col justify-between flex-1">
          <div>
            <span className="text-xs font-medium text-[#FFD700] bg-yellow-50 px-2 py-0.5 rounded-full">
              {recipe.category}
            </span>
            <h3 className="font-bold text-gray-800 mt-1 text-sm">{recipe.title}</h3>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span><i className="far fa-clock mr-1"></i>{recipe.time}</span>
            <span><i className="fas fa-signal mr-1"></i>{recipe.difficulty}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "large") {
    return (
      <article className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100" itemScope itemType="https://schema.org/Recipe">
        <div className="relative overflow-hidden h-56">
          <LazyImage
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full group-hover:scale-105 transition-transform duration-300"
            width={600}
            height={400}
          />
          <div className="absolute top-3 left-3">
            <span className="bg-[#FFD700] text-white text-xs font-bold px-3 py-1 rounded-full">
              {recipe.category}
            </span>
          </div>
          <button className="absolute top-3 right-3 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition-colors" aria-label="Aggiungi ai preferiti">
            <i className="far fa-heart text-gray-600 hover:text-red-500"></i>
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center gap-1" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star text-xs ${i < Math.floor(recipe.rating) ? "text-[#FFD700]" : "text-gray-400"}`}
                ></i>
              ))}
              <span className="text-white text-xs ml-1" itemProp="ratingValue">{recipe.rating}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#FFD700] transition-colors" itemProp="name">
            {recipe.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2" itemProp="description">{recipe.description}</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1" itemProp="totalTime" content={`PT${parseInt(recipe.time)}M`}>
              <i className="far fa-clock text-[#FFD700]"></i>
              {recipe.time}
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-signal text-[#FFD700]"></i>
              {recipe.difficulty}
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="relative overflow-hidden h-44">
        <LazyImage
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          width={400}
          height={300}
        />
        <div className="absolute top-2 left-2">
          <span className="bg-[#FFD700] text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {recipe.category}
          </span>
        </div>
        <button className="absolute top-2 right-2 bg-white/90 rounded-full w-7 h-7 flex items-center justify-center hover:bg-white transition-colors" aria-label="Aggiungi ai preferiti">
          <i className="far fa-heart text-gray-600 hover:text-red-500 text-sm"></i>
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-gray-800 group-hover:text-[#FFD700] transition-colors">
          {recipe.title}
        </h3>
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <i className="far fa-clock text-[#FFD700]"></i>
            {recipe.time}
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-signal text-[#FFD700]"></i>
            {recipe.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-star text-[#FFD700]"></i>
            {recipe.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
