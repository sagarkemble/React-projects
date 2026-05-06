import { useEffect, useState } from "react";
import type * as ApiResponse from "./types/ApiResponse";
import Loader from "./components/Loader";
import MealCard from "./components/MealCard";

function App() {
  const [mealData, setMealData] = useState<ApiResponse.MealData | undefined>();
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMeal() {
      setIsLoading(true);

      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/meals?page=${pageNo}&limit=10`,
      );

      const data: ApiResponse.ApiResponse = await response.json();

      setMealData(data.data);
      setIsLoading(false);
    }

    fetchMeal();
  }, [pageNo]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-[#f5f7fa]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,140,255,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(123,97,255,0.16),transparent_30%),radial-gradient(circle_at_bottom,rgba(83,214,255,0.12),transparent_35%)]" />

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <nav className="sticky top-6 z-50 mb-28 flex items-center justify-between rounded-full border border-white/[0.08] bg-[rgba(9,9,11,0.72)] px-6 py-4 backdrop-blur-2xl">
          <h1 className="text-xl font-semibold tracking-tight text-[#f5f7fa]">
            CapMeals
          </h1>

          <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#ebebeb]">
            Explore Meals
          </button>
        </nav>

        <div className="relative mb-32 max-w-5xl">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#4f8cff]/20 blur-3xl" />

          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#7b61ff]/20 blur-3xl" />

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#7d8596]">
            Cinematic Food Library
          </p>

          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-3px] text-[#f5f7fa] sm:text-7xl">
            Discover beautifully crafted meals through floating cinematic cards.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#b4bac7]">
            Inspired by Cap’s creator-focused visual storytelling with layered
            glass surfaces, atmospheric gradients, and premium motion-native
            composition.
          </p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {mealData?.data!.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        )}

        <footer className="mt-28 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pt-8 sm:flex-row">
          <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2 text-sm text-[#b4bac7] backdrop-blur-xl">
            Page {pageNo}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-6 py-3 text-sm text-[#f5f7fa] backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5"
              onClick={() => setPageNo(Math.max(pageNo - 1, 1))}
            >
              Previous
            </button>

            <button
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#ebebeb]"
              onClick={() => setPageNo(pageNo + 1)}
            >
              Next
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default App;
