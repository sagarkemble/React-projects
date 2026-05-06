import type * as ApiResponse from "../types/ApiResponse";

function MealCard({ meal }: { meal: ApiResponse.MealDetails }) {
  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[rgba(18,18,22,0.82)] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-2 hover:border-white/[0.14]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,97,255,0.14),transparent_40%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 p-7">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b4bac7]">
            {meal.strCategory}
          </p>

          <h2 className="max-w-lg text-4xl font-bold leading-[1] tracking-[-2px] text-white">
            {meal.strMeal}
          </h2>
        </div>
      </div>

      <div className="space-y-8 p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#7d8596]">
              Origin
            </p>

            <p className="mt-2 text-lg text-[#f5f7fa]">{meal.strArea}</p>
          </div>

          <div className="rounded-full border border-white/[0.08] bg-white/[0.05] px-5 py-2 text-sm text-[#b4bac7] backdrop-blur-xl">
            Premium Recipe
          </div>
        </div>

        <p className="line-clamp-4 text-[15px] leading-8 text-[#b4bac7]">
          {meal.strInstructions}
        </p>

        <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-500 hover:bg-[#ebebeb]">
          View Recipe
        </button>
      </div>
    </article>
  );
}

export default MealCard;
