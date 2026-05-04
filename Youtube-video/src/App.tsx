import { useEffect, useState } from "react";
import "./App.css";
import type { ApiResponse } from "./types/ApiResponse";
import Loader from "./components/Loader";
import VideoCard from "./components/VideoCard";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>();
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchApi = async function () {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/youtube/videos?page=${pageNo}&limit=20`,
      );
      const jsonResponse = await response.json();
      setApiResponse(jsonResponse);
      setIsLoading(true);
    };
    fetchApi();
  }, [pageNo]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header />

      <main className="pt-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <div className="flex gap-3 py-3 overflow-x-auto scrollbar-hide mb-4">
          {[
            "All",
            "Music",
            "Gaming",
            "News",
            "Live",
            "Coding",
            "Podcasts",
            "Recently uploaded",
            "Watched",
            "New to you",
          ].map((chip, i) => (
            <button
              key={chip}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-white text-black"
                  : "bg-[#272727] text-white hover:bg-[#3f3f3f]"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {apiResponse?.data.data.map((video) => (
              <VideoCard key={video.items?.id} videoData={video} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </main>

      <footer className="flex items-center justify-center gap-6 py-8 mt-4">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#272727] hover:bg-[#3f3f3f] text-white text-sm font-medium transition-colors disabled:opacity-40"
          onClick={() => setPageNo(Math.max(pageNo - 1, 1))}
          disabled={pageNo === 1}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          Previous
        </button>
        <span className="text-sm text-[#aaa] font-medium">Page {pageNo}</span>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#272727] hover:bg-[#3f3f3f] text-white text-sm font-medium transition-colors"
          onClick={() => setPageNo(pageNo + 1)}
        >
          Next
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </footer>
    </div>
  );
}

export default App;
