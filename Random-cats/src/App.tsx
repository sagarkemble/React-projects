import { useEffect, useState } from "react";
import type * as ApiResponse from "./types/ApiResponse";
import Loader from "./components/Loader";
import CatCard from "./components/CatCard";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [catData, setCatData] = useState<ApiResponse.ApiResponse | undefined>();

  useEffect(() => {
    async function fetchCat() {
      setIsLoading(true);

      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/cats/cat/random`,
      );

      const data: ApiResponse.ApiResponse = await response.json();

      setCatData(data);

      setIsLoading(false);
    }

    fetchCat();
  }, [count]);

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#202020]">
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12">
        <nav className="mb-16 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-[#202020]">CatCloud</h1>

          <button
            onClick={() => setCount(count + 1)}
            className="rounded-full bg-[#29ABE2] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[rgba(41,171,226,0.25)_0px_8px_24px]"
          >
            Explore Cats
          </button>
        </nav>

        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6433]">
              Cute Cat Explorer
            </p>

            <h2 className="text-5xl font-extrabold leading-[1.1] text-[#202020] sm:text-6xl">
              Discover adorable cat breeds from around the world.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#666666]">
              A playful Ko-fi inspired experience filled with rounded cards,
              cheerful colors, and lovable feline personalities.
            </p>

            <button
              onClick={() => setCount(count + 1)}
              className="mt-10 rounded-full bg-[#FF6433] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[rgba(255,100,51,0.25)_0px_10px_30px]"
            >
              Meet Another Cat
            </button>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-[#FFD96E]/40 blur-2xl" />

            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-[#C19BFF]/30 blur-3xl" />

            <div className="rounded-[32px] bg-[#F8FBFF] p-4 shadow-[rgba(0,0,0,0.08)_0px_8px_32px]">
              {isLoading ? <Loader /> : <CatCard catDetails={catData!.data!} />}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
