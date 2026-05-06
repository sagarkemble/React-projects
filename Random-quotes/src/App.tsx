import { useEffect, useState } from "react";
import type * as ApiResponse from "./types/ApiResponse";
import Loader from "./components/Loader";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [quoteData, setQuoteData] = useState<
    ApiResponse.QuoteData | undefined
  >();

  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      setIsLoading(true);

      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/quotes?page=${pageNo}&limit=10`,
      );

      const data: ApiResponse.ApiResponse = await response.json();

      setQuoteData(data.data);

      setIsLoading(false);
    }

    fetchQuote();
  }, [pageNo]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[#fcfdff]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,89,0,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,117,255,0.12),transparent_35%)]" />

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        <nav className="mb-24 flex items-center justify-between border-b border-white/[0.06] pb-6">
          <h1 className="text-lg font-medium tracking-wide text-[#fcfdff]">
            ResendQuotes
          </h1>

          <button className="rounded-[8px] bg-[#fcfdff] px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#f1f7fe]">
            Explore
          </button>
        </nav>

        <div className="relative mb-32 max-w-6xl">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[rgba(255,89,0,0.14)] blur-3xl" />

          <div className="absolute right-20 top-10 h-72 w-72 rounded-full bg-[rgba(0,117,255,0.18)] blur-3xl" />

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#888e90]">
            Editorial Quote Archive
          </p>

          <h2 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-3px] text-[#fcfdff] sm:text-7xl">
            Timeless words presented in a cinematic developer interface.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[rgba(252,253,255,0.7)]">
            Inspired by Resend’s editorial aesthetic — serif-inspired layouts,
            restrained contrast, atmospheric glow, and premium dark surfaces.
          </p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {quoteData?.data.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
        )}

        <footer className="mt-28 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row">
          <div className="rounded-full border border-white/[0.08] bg-[#101012] px-5 py-2 text-sm text-[#a1a4a5]">
            Page {pageNo}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="rounded-[8px] border border-white/[0.14] bg-[#0a0a0c] px-5 py-2.5 text-sm text-[#fcfdff] transition-all duration-300 hover:bg-[#101012]"
              onClick={() => setPageNo(Math.max(1, pageNo - 1))}
            >
              Previous
            </button>

            <button
              className="rounded-[8px] bg-[#fcfdff] px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#f1f7fe]"
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
