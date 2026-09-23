import { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

interface RecipeSectionProps {
  title: string;
  recipes: Recipe[];
  variant?: "default" | "large";
}

export default function RecipeSection({ title, recipes, variant = "default" }: RecipeSectionProps) {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-[#FFD700]">|</span> {title}
          </h2>
          <a href="#" className="text-[#FFD700] font-medium text-sm hover:underline">
            Vedi tutte <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </div>
        <div className={
          variant === "large"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        }>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
}
