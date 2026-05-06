import { useEffect, useState } from "react";
import type * as ApiResponse from "./types/ApiResponse";
import Loader from "./components/Loader";
import JokeCard from "./components/JokeCard";

function App() {
  const [jokeData, setJokeData] = useState<ApiResponse.JokeData | undefined>();
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchJoke() {
      setIsLoading(true);

      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomjokes?limit=10&inc=categories%252Cid%252Ccontent&page=${pageNo}`,
      );

      const data: ApiResponse.ApiResponse = await response.json();

      setJokeData(data.data);
      setIsLoading(false);
    }

    fetchJoke();
  }, [pageNo]);

  return (
    <main className="min-h-screen bg-[#121110] text-[#faf9f6]">
      <section className="mx-auto max-w-6xl px-5 py-10 pt-24 sm:px-8 lg:px-12">
        <div className="mb-24 max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#868584]">
            Daily Humor Collection
          </p>

          <h2 className="text-5xl leading-none tracking-[-2px] text-[#faf9f6] sm:text-7xl">
            Calm, warm, internet humor curated for late-night scrolling.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#afaeac]">
            Quiet humor, soft contrast, and a reading experience designed to
            feel calm, cinematic, and effortless.
          </p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="space-y-6">
            {jokeData?.data.map((joke) => (
              <JokeCard key={joke.id} joke={joke} />
            ))}
          </div>
        )}

        <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm uppercase tracking-[0.25em] text-[#868584]">
            Page {pageNo}
          </p>

          <div className="flex items-center gap-4">
            <button
              className="rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm text-[#afaeac] transition-opacity duration-300 hover:opacity-70"
              onClick={() => setPageNo(Math.max(pageNo - 1, 1))}
            >
              Previous
            </button>

            <button
              className="rounded-full bg-[#353534] px-5 py-3 text-sm text-[#faf9f6] transition-opacity duration-300 hover:opacity-80"
              onClick={() => setPageNo(pageNo + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
